export interface ModelInterface {
    type: ModelInterfaceStatic;
    addAttributes(params: any): any;
    addAttribute(name: string, value: any): any;
    get(name: string): any;
    set(name: string, value: any): any;
    update(): any;
    save(): any;
    delete(): any;
    form(): any;
}
export interface ModelInterfaceStatic {
    model_name: string;
    booted: boolean;
    boot(): void;
    all(): any;
    find(id: string): any;
    create(attributes: any): any;
}
export declare function staticImplements<T>(): (constructor: T) => void;
//# sourceMappingURL=ModelInterface.d.ts.map