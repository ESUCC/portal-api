import { Model } from "../Model";
import { ModelInterface, ModelInterfaceStatic } from "../interfaces/ModelInterface";
import { Form } from "../datatypes/form/Form";
export declare class Tab extends Model implements ModelInterface {
    type: ModelInterfaceStatic;
    static model_name: string;
    static form: Form;
    static booted: boolean;
    constructor(params?: any);
    static boot(): Promise<void>;
    get(name: string): any;
    set(name: string, value: any): void;
    static all(): Promise<Tab[]>;
    static find(id: string): Promise<Tab | undefined>;
    update(): Promise<this>;
    save(): Promise<any>;
    static create(attributes: any): Promise<Tab>;
    delete(): Promise<any>;
    static define(): Promise<Form>;
    static factory(): Tab;
    validate(): boolean;
}
//# sourceMappingURL=Tab.d.ts.map