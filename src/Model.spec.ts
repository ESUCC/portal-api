import * as Portal from './Portal';
import {ModelInterface, ModelInterfaceStatic} from "./interfaces/ModelInterface";

const MODELS = [
    Portal.App,
    Portal.Attribute,
    Portal.Group,
    Portal.GroupType,
    Portal.IpAddress,
    Portal.OwnerType,
    Portal.Privilege,
    Portal.Tab,
    Portal.User,
];

let modelAllLoaded = {};
let fakedModels = {};
let testModel: ModelInterface | undefined;

async function modelAll(model: ModelInterfaceStatic) {
    if (! modelAllLoaded.hasOwnProperty(model.model_name)) {
        await model.all().then(async (response: any) => {
            let modelList = response;

            if (response == undefined || (Array.isArray(response) && response.length == 0)) {
                let tmp_model = model.factory();
                await tmp_model.save();
                modelList = [tmp_model];
                // @ts-ignore
                fakedModels[model.model_name] = [ tmp_model ];
            }

            // @ts-ignore
            modelAllLoaded[model.model_name] = modelList;
        });
    }

    // @ts-ignore
    return modelAllLoaded[model.model_name];
}

async function cleanup() {
    let keys = Object.keys(fakedModels);
    for (let key of keys) {
        // @ts-ignore
        for (let model of fakedModels[key]) {
            await model.delete();
        }
    }
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
            // @ts-ignore
            return model.all().then(async (models) => {
                let slug: string = '';

                await modelAll(model).then((all) => {
                    slug = all[0].get('slug');
                });

                // @ts-ignore
                return model.find(slug).then((tmp_model) => {
                    // @ts-ignore
                    if (tmp_model == undefined) {
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
            // @ts-ignore
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

            // @ts-ignore
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

            // @ts-ignore
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

describe('Clean up', () => {
   test('Models clean up', async () => {
      await cleanup();
   });
});