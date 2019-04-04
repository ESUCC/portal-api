import { Model } from "../Model";
import { ModelInterface, ModelInterfaceStatic } from "../interfaces/ModelInterface";
import { Form } from "../datatypes/form/Form";
export declare class Privilege extends Model implements ModelInterface {
    type: ModelInterfaceStatic;
    static model_name: string;
    static form: Form;
    static booted: boolean;
    constructor(params?: any);
    static boot(): Promise<void>;
    get(name: string): any;
    set(name: string, value: any): void;
    static all(): Promise<Privilege[]>;
    static find(id: string): Promise<Privilege | undefined>;
    update(): Promise<this>;
    save(): Promise<any>;
    static create(attributes: any): Promise<Privilege>;
    delete(): Promise<any>;
    static define(): Promise<Form>;
    static factory(): Privilege;
    validate(): boolean;
}
//# sourceMappingURL=Privilege.d.ts.map