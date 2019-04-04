import { Model } from "../Model";
import { ModelInterface, ModelInterfaceStatic } from "../interfaces/ModelInterface";
import { Form } from "../datatypes/form/Form";
export declare class Attribute extends Model implements ModelInterface {
    type: ModelInterfaceStatic;
    static model_name: string;
    static form: Form;
    static booted: boolean;
    constructor(params?: any);
    static boot(): Promise<void>;
    get(name: string): any;
    set(name: string, value: any): void;
    static all(): Promise<Attribute[]>;
    static find(id: string): Promise<Attribute | undefined>;
    update(): Promise<this>;
    save(): Promise<any>;
    static create(attributes: any): Promise<Attribute>;
    delete(): Promise<any>;
    static define(): Promise<Form>;
    static factory(): Attribute;
    validate(): boolean;
}
//# sourceMappingURL=Attribute.d.ts.map