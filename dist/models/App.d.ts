import { Model } from "../Model";
import { ModelInterface, ModelInterfaceStatic } from "../interfaces/ModelInterface";
export declare class App extends Model implements ModelInterface {
    type: ModelInterfaceStatic;
    static model_name: string;
    static booted: boolean;
    constructor(params?: any);
    static boot(): void;
    get(name: string): any;
    set(name: string, value: any): void;
    static all(): Promise<App[]>;
    static find(id: string): Promise<App | undefined>;
    update(): Promise<this>;
    save(): Promise<any>;
    static create(attributes: any): Promise<App>;
    delete(): Promise<any>;
    form(): Promise<any>;
}
//# sourceMappingURL=App.d.ts.map