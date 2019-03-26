import { Model } from "../Model";
import { ModelInterface, ModelInterfaceStatic } from "../interfaces/ModelInterface";
import { Form } from "../datatypes/form/Form";
export declare class User extends Model implements ModelInterface {
    type: ModelInterfaceStatic;
    static model_name: string;
    static form: Form;
    static booted: boolean;
    constructor(params?: any);
    static boot(): Promise<void>;
    get(name: string): any;
    set(name: string, value: any): void;
    static all(): Promise<User[]>;
    static find(id: string): Promise<User | undefined>;
    update(): Promise<this>;
    save(): Promise<any>;
    static create(attributes: any): Promise<User>;
    delete(): Promise<any>;
    static define(): Promise<Form>;
    static factory(): User;
    validate(): boolean;
}
//# sourceMappingURL=User.d.ts.map