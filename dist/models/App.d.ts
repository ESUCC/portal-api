import { Model } from "../Model";
import { ModelInterface, ModelInterfaceStatic } from "../interfaces/ModelInterface";
import { Form } from "../datatypes/form/Form";
import { ImageManager } from "../datatypes/image/ImageManager";
export declare class App extends Model implements ModelInterface {
    type: ModelInterfaceStatic;
    static model_name: string;
    static form: Form;
    static booted: boolean;
    image: ImageManager;
    constructor(params?: any);
    static boot(): Promise<void>;
    get(name: string): any;
    set(name: string, value: any): void;
    getAttributes(): JSON;
    static all(): Promise<App[]>;
    static find(id: string): Promise<App | undefined>;
    update(): Promise<this>;
    save(): Promise<any>;
    static create(attributes: any): Promise<App>;
    delete(): Promise<any>;
    static define(): Promise<Form>;
    static factory(): App;
    validate(): boolean;
}
//# sourceMappingURL=App.d.ts.map