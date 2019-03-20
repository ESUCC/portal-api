import { FormElement } from "./FormElement";
export declare class Form {
    protected elements: FormElement[];
    protected invalidElements: FormElement[];
    constructor(elements?: FormElement[]);
    addElement(element: FormElement): void;
    getElement(name: string): FormElement | undefined;
    removeElement(name: string): FormElement | undefined;
    invalid(): FormElement[];
    valid(): FormElement[];
    validate(data: any): boolean;
}
//# sourceMappingURL=Form.d.ts.map