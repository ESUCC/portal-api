import { Form } from "../datatypes/form/Form";
export interface ModelInterface {
    type: ModelInterfaceStatic;
    addAttributes(params: any): any;
    addAttribute(name: string, value: any): any;
    get(name: string): any;
    set(name: string, value: any): any;
    update(): any;
    save(): any;
    delete(): any;
    validate(): boolean;
}
export interface ModelInterfaceStatic {
    model_name: string;
    booted: boolean;
    form: Form;
    boot(): void;
    all(): any;
    find(id: string): any;
    create(attributes: any): any;
    define(): any;
    factory(): any;
}
export declare function staticImplements<T>(): (constructor: T) => void;
//# sourceMappingURL=ModelInterface.d.ts.map