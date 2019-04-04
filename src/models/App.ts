import {Model} from "../Model";
import {ModelInterface, ModelInterfaceStatic, staticImplements} from "../interfaces/ModelInterface";
import pluralize = require("pluralize");
import {Form} from "../datatypes/form/Form";
import {ImageManager} from "../datatypes/image/ImageManager";
import {Image} from "../datatypes/image/Image";
import * as Portal from "../Portal";

@staticImplements<ModelInterfaceStatic>()
export class App extends Model implements ModelInterface {
    type: ModelInterfaceStatic = App;
    static model_name: string = 'app';

    static form: Form;
    static booted: boolean = false;

    icon = new ImageManager();

    constructor(params?: any) {
        super(params);

        this.set('icon', super.get('icon'));
        super.set('icon', undefined);

        (this.type.booted || this.type.boot())
    }

    static async boot() {
        if (this.booted) return;

        await this.define();
        this.booted = true;
    }

    get(name: string) {
        if (name == 'icon') {
            // @ts-ignore
            let rawIcon = this.icon.resolve().raw;

            if (typeof rawIcon != 'string') return undefined;
            else return rawIcon;
        }

        return super.get(name);
    }

    set(name: string, value: any) {
        if (name == 'icon' && this.icon.old == undefined) {
            this.icon.old = new Image();
            this.icon.old.raw = value;
        }

        return super.set(name, value);
    }

    getAttributes(): JSON {
        let attributes = super.getAttributes();

        //  @ts-ignore
        attributes.icon = this.get('icon');

        return attributes;
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
        return Model.find(this.type.model_name, this.get('slug')).then((response) => {
            this.addAttributes(response[this.type.model_name]);

            return response;
        });
    }

    save() {
        let promise;

        if (! this.type.form.validate(this.getAttributes())
            && (this.get('slug') == undefined))
        {
            promise = Promise.reject(this.type.model_name + ' failed to validate.');
        }
        else if (this.get('slug') === undefined) {
            promise = Portal.API.add(this.type.model_name, this.getAttributes()).then((response) => {
                super.addAttributes(response[this.type.model_name]);

                return response;
            });
        } else {
            promise = Portal.API.edit(this.type.model_name, this.get('slug'), this.getAttributes()).then((response) => {
                super.addAttributes(response[this.type.model_name]);

                return response;
            });
        }

        return promise;    }

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
        return this.type.form.validate(this.getAttributes());
    }
}