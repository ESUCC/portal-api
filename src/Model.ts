import {Portal} from "./Portal";
import {ModelInterface, ModelInterfaceStatic} from "./interfaces/ModelInterface";

export abstract class Model {
    protected attributes: JSON;

    protected constructor(params?: any) {
        // @ts-ignore
        this.attributes = {};
        if (params !== undefined && params !== null)
            this.addAttributes(params)
    }

    addAttributes(params: any) {
        const keys = Object.keys(params);

        for (let key of keys) {
            this.addAttribute(key, params[key]);
        }
    }

    addAttribute(name: string, value: any) {
        // @ts-ignore
        this.attributes[name] = value;
    }

    getAttributes() {
        return this.attributes;
    }

    get(name: string) {
        if (this.attributes.hasOwnProperty(name)) {
            // @ts-ignore
            return this.attributes[name];
        } else {
            // @ts-ignore
            return this[name];
        }
    }

    set(name: string, value: any) {
        if (value == undefined) this.deleteAttribute(name);
        else this.addAttribute(name, value);
    }

    deleteAttribute(name: string) {
        // @ts-ignore
        delete this.attributes[name];
    }

    static all(model_name: string) {
        return Portal.API.list(model_name);
    }

    static find(model_name: string, id: string) {
        return Portal.API.view(model_name, id);
    }

    update(model_name: string) {
        return Model.find(model_name, this.get('slug')).then((response) => {
            this.addAttributes(response[model_name]);

            return response;
        });
    }

    save(model_name: string, type: ModelInterfaceStatic) {
        let promise;

        if (! type.form.validate(this.getAttributes())) {
            promise = Promise.reject(model_name + ' failed to validate.');
        }
        else if (this.get('slug') === undefined) {
            promise = Portal.API.add(model_name, this.attributes).then((response) => {
                this.addAttributes(response[model_name]);

                return response;
            });
        } else {
            promise = Portal.API.edit(model_name, this.get('slug'), this.attributes).then((response) => {
                this.addAttributes(response[model_name]);

                return response;
            });
        }

        return promise;
    }

    delete(model_name: string, id: string) {
        return Portal.API.delete(model_name, id);
    }

    static define(model_name: string) {
        return Portal.API.form(model_name).then((response) => {
            return response[model_name];
        });
    }

    /**
     * Compares two models.
     *
     * Returns 0 if models are of the same type and have the same slug.
     * The return value is negative if they are different model types
     * and positive if they are different slugs but of the same type.
     *
     * @param model1
     * @param model2
     *
     * @return number
     */
    static compare(model1: ModelInterfaceStatic & ModelInterface, model2: ModelInterfaceStatic & ModelInterface): number {
        let out: number;

        if (model1.model_name !== model2.model_name) {
            out = -1;
        } else if (model1.get('slug') !== model2.get('slug')) {
            out = 1;
        } else out = 0;

        return out;
    }
}