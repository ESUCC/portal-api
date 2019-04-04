import { Model } from "../Model";
import { ModelInterface, ModelInterfaceStatic } from "../interfaces/ModelInterface";
import { Form } from "../datatypes/form/Form";
export declare class IpAddress extends Model implements ModelInterface {
    type: ModelInterfaceStatic;
    static model_name: string;
    static form: Form;
    static booted: boolean;
    constructor(params?: any);
    static boot(): Promise<void>;
    get(name: string): any;
    set(name: string, value: any): void;
    static all(): Promise<IpAddress[]>;
    static find(id: string): Promise<IpAddress | undefined>;
    update(): Promise<this>;
    save(): Promise<any>;
    static create(attributes: any): Promise<IpAddress>;
    delete(): Promise<any>;
    static define(): Promise<Form>;
    static factory(): IpAddress;
    validate(): boolean;
}
//# sourceMappingURL=IpAddress.d.ts.map