import { Model } from "../Model";
import { ModelInterface, ModelInterfaceStatic } from "../interfaces/ModelInterface";
import { Form } from "../datatypes/form/Form";
export declare class OwnerType extends Model implements ModelInterface {
    type: ModelInterfaceStatic;
    static model_name: string;
    static form: Form;
    static booted: boolean;
    constructor(params?: any);
    static boot(): Promise<void>;
    get(name: string): any;
    set(name: string, value: any): void;
    static all(): Promise<OwnerType[]>;
    static find(id: string): Promise<OwnerType | undefined>;
    update(): Promise<this>;
    save(): Promise<any>;
    static create(attributes: any): Promise<OwnerType>;
    delete(): Promise<any>;
    static define(): Promise<Form>;
    static factory(): OwnerType;
    validate(): boolean;
}
//# sourceMappingURL=OwnerType.d.ts.map