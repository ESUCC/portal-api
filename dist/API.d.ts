export declare class API {
    static URL: string;
    static boot(): Promise<void>;
    static list(model: string): Promise<any>;
    static view(model: string, id: string): Promise<any>;
    static add(model: string, data: JSON): Promise<any>;
    static edit(model: string, id: string, data: JSON): Promise<any>;
    static delete(model: string, id: string): Promise<any>;
    static form(model: string): Promise<any>;
    static request(query: RequestData): Promise<any>;
    private static url;
}
interface UrlParams {
    m: string;
    a?: string;
    id?: string;
}
interface RequestData {
    params: UrlParams;
    type?: string;
    data?: JSON;
}
export {};
//# sourceMappingURL=API.d.ts.map