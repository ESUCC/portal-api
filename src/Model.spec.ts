import {Portal} from "./Portal";
import {ModelInterface, ModelInterfaceStatic} from "./interfaces/ModelInterface";

const MODELS = [
    Portal.App,
    Portal.User,
];

let modelAllLoaded = {};
let testModel: ModelInterface | undefined;

async function modelAll(model: ModelInterfaceStatic) {
    if (! modelAllLoaded.hasOwnProperty(model.model_name)) {
        await model.all().then((response: any) => {
            // @ts-ignore
            modelAllLoaded[model.model_name] = response;
        });
    }

    // @ts-ignore
    return modelAllLoaded[model.model_name];
}

for (let model of MODELS) {
    describe(Portal.ucfirst(model.model_name), () => {
        test(model.model_name + ' will boot', () => {
            return Portal.init().then(() => {
                expect(model.booted).toBe(true);
            });
        });

        test(model.model_name + ' can access API', () => {
            return modelAll(model).then((all) => {
                expect(all).toBeDefined();
            });
        });

        test(model.model_name + ' builds form', () => {
            expect(model.form).toBeDefined();
        });

        test('`all()` returns a promise with list of ' + model.model_name + ' instances', () => {
            return modelAll(model).then((all) => {
                expect(all[0].get('slug')).toBeDefined();
            });
        });

        test('`find(slug)` returns a promise with a ' + model.model_name + ' instance', () => {
            return model.all().then(async (models) => {
                let slug: string = '';

                await modelAll(model).then((all) => {
                    slug = all[0].get('slug');
                });

                return model.find(slug).then((tmp_model) => {
                    // @ts-ignore
                    if (tmp_model == undefined) {
                        console.log(tmp_model);
                        throw Error('tmp_model not defined');
                    }

                    expect(tmp_model.get('slug')).toBe(slug);
                    testModel = tmp_model;
                });
            });
        });

        test(model.model_name + ' can set and get attributes', () => {
            const attribute = 'test_attribute';
            const value = "test_value";

            if (testModel == undefined) {
                throw Error('testModel not defined');
            }

            testModel.set(attribute, value);

            expect(testModel.get(attribute)).toBe(value);

            testModel.set(attribute, undefined);

            testModel = undefined;
        });

        test('`create(attributes)` returns a promise with a '  + model.model_name +
            ' instance that has been saved to the server', () => {
            return model.create(model.form.factory()).then((response) => {
                expect(response).toBeInstanceOf(model);
                expect(response.get('slug')).toBeDefined();
                testModel = response;
            });
        });

        test('`save()` method saves via the API', async () => {
            if (testModel == undefined) {
                throw Error('testModel not defined');
            }

            let name = testModel.get('name') + '-testing';

            testModel.set('name', name);

            await testModel.save();

            expect(testModel.get('name')).toBe(name);
        });

        test('`update()` method updates the ' + model.model_name + ' with the current ' +
            'information from the API', async () => {

            if (testModel == undefined) {
                throw Error('testModel not defined');
            }

            let tmp_model: ModelInterface | undefined;

            await model.find(testModel.get('slug')).then((response) => {
                tmp_model = response;
            });

            // @ts-ignore
            if (tmp_model == undefined) {
                throw Error('tmp_model not defined');
            }

            let name = tmp_model.get('name');

            name = name.substring(0, name.indexOf('-testing'));

            tmp_model.set('name', name);
            await tmp_model.save();

            expect(testModel.get('name')).toBe(name + '-testing');

            await testModel.update();

            expect(testModel.get('name')).toBe(name);
        });

        test('`delete()` method deletes the ' + model.model_name + ' via the API', async () => {
            if (testModel == undefined) {
                throw Error('testModel not defined');
            }

            let slug = testModel.get('slug');

            await testModel.delete().then((response: any) => {
                expect(response).toBeTruthy();
            });

            await model.find(slug).then((response) => {
                expect(response).toBeUndefined();
            });
        });

        test('`factory()` method returns a fake ' + model.model_name, () => {
            expect(model.factory()).toBeInstanceOf(model);
        });

        test('`validate()` validates the '+ model.model_name, () => {
            expect(model.factory().validate()).toBeTruthy();
        });
    });
}