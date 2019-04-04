import {Model} from "../Model";
import {ModelInterface, ModelInterfaceStatic, staticImplements} from "../interfaces/ModelInterface";
import pluralize = require("pluralize");
import {Form} from "../datatypes/form/Form";

@staticImplements<ModelInterfaceStatic>()
export class IpAddress extends Model implements ModelInterface {
    type: ModelInterfaceStatic = IpAddress;
    static model_name: string = 'ipaddress';

    static form: Form;
    static booted: boolean = false;

    constructor(params?: any) {
        super(params);
        (this.type.booted || this.type.boot())
    }

    static async boot() {
        if (this.booted) return;

        await this.define();
        this.booted = true;
    }

    get(name: string) {
        return super.get(name);
    }

    set(name: string, value: any) {
        return super.set(name, value);
    }

    static all() {
        return super.all(this.model_name).then((response) => {
            let models = [];

            for (let modelData of response[pluralize(this.model_name)]) {
                models.push(new this(modelData));
            }

            return models;
        });
    }

    static find(id: string) {
        return super.find(this.model_name, id).then((response) => {
            if (! response.hasOwnProperty(this.model_name)) return undefined;
            else return new this(response[this.model_name]);
        });
    }

    update() {
        return super.update(this.type.model_name).then(() => {
           return this;
        });
    }

    save() {
        return super.save(this.type.model_name, this.type);
    }

    static async create(attributes: any) {
        let model = new this(attributes);

        await model.save();

        return model;
    }

    delete() {
        return super.delete(this.type.model_name, this.get('slug')).then(
            (response) => response.success
        );
    }

    static define() {
        return super.define(this.model_name).then((response) => {
            this.form = new Form(response);

            return this.form;
        });
    }

    static factory() {
        return new this(this.form.factory());
    }

    validate(): boolean {
        return this.type.form.validate(super.getAttributes());
    }
}