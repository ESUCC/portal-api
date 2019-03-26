export declare class FormElement {
    name: string;
    type: string;
    required: boolean;
    constructor(name: string, type: string, required?: boolean);
    validate(value: any): boolean;
    fake(): string | number;
}
//# sourceMappingURL=FormElement.d.ts.map