import { ModelInterface, ModelInterfaceStatic } from "./interfaces/ModelInterface";
export declare abstract class Model {
    protected attributes: JSON;
    protected constructor(params?: any);
    addAttributes(params: any): void;
    addAttribute(name: string, value: any): void;
    get(name: string): any;
    set(name: string, value: any): void;
    deleteAttribute(name: string): void;
    static all(model_name: string): Promise<any>;
    static find(model_name: string, id: string): Promise<any>;
    update(model_name: string): Promise<any>;
    save(model_name: string): Promise<any>;
    delete(model_name: string, id: string): Promise<any>;
    form(model_name: string): Promise<any>;
    /**
     * Compares two models.
     *
     * Returns 0 if models are of the same type and have the same slug.
     * The return value is negative if they are different model types
     * and positive if they are different slugs but of the same type.
     *
     * @param model1
     * @param model2
     *
     * @return number
     */
    static compare(model1: ModelInterfaceStatic & ModelInterface, model2: ModelInterfaceStatic & ModelInterface): number;
}
//# sourceMappingURL=Model.d.ts.map