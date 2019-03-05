export declare abstract class Model implements Model {
    attributes: JSON;
    model_name: string;
    constructor(name: string, params: any);
    addAttributes(params: any): void;
    addAttribute(name: string, value: any): void;
    get(name: string): any;
    set(name: string, value: any): void;
    static list(): Promise<any>;
    static view(id: string): Promise<any>;
    static add(): void;
}
//# sourceMappingURL=Model.d.ts.map