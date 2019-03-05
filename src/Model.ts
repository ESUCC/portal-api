import {Portal} from "./Portal";

export abstract class Model {
    abstract model_name: string;
    abstract booted: boolean = false;
    protected attributes: JSON;

    protected constructor(params?: any) {
        // @ts-ignore
        this.attributes = {};
        if (params !== undefined && params !== null)
            this.addAttributes(params)
    }

    abstract boot(): void;

    protected addAttributes(params: any) {
        const keys = Object.keys(params);

        for (let key of keys) {
            this.addAttribute(key, params[key]);
        }
    }

    protected addAttribute(name: string, value: any) {
        // @ts-ignore
        this.attributes[name] = value;
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
        this.addAttribute(name, value);
    }

    all() {
        return Portal.API.list(this.model_name);
    }

    find(id: string) {
        return Portal.API.view(this.model_name, id);
    }

    add() {
        return Portal.API.add(this.model_name, this.attributes);
    }

    edit(id: string) {
        return Portal.API.edit(this.model_name, id, this.attributes);
    }

    delete(id: string) {
        return Portal.API.delete(this.model_name, id);
    }

    form() {
        return Portal.API.form(this.model_name);
    }
}