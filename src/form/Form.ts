import {FormElement} from "./FormElement";

export class Form {
    protected elements: FormElement[] = [];
    protected invalidElements: FormElement[] = [];

    constructor(elements?: FormElement[]) {
        if (elements !== undefined) this.elements = elements;
    }

    addElement(element: FormElement) {
        this.elements.push(element);
    }

    getElement(name: string) {
        return this.elements.find(elem => elem.name.toLowerCase() == name.toLowerCase());
    }

    removeElement(name: string) {
        let elem = this.elements.find(elem => elem.name.toLowerCase() == name.toLowerCase());

        if (elem === undefined) return undefined;

        // @ts-ignore
        let index = this.elements.indexOf(elem);

        return this.elements.splice(index, 1)[0];
    }

    invalid() {
        return this.invalidElements;
    }

    valid() {
        return this.elements.filter(elem => this.invalid().indexOf(elem) < 0);
    }

    validate(data: any) {
        this.invalidElements = [];

        this.elements.forEach((elem) => {
            if (data.hasOwnProperty(elem.name.toLowerCase())) {
                let valid = elem.validate(data[elem.name.toLowerCase()]);

                if (! valid) this.invalidElements.push(elem);
            } else {
                if (elem.required) this.invalidElements.push(elem);
            }
        });

        return this.invalidElements.length === 0;
    }

    validateWRONG(data: any) {
        this.invalidElements = [];

        let keys = Object.keys(data);

        for (let key of keys) {
            key = key.toLowerCase();
            let elem = this.elements.find(elem => elem.name.toLowerCase() == key);
            let valid: boolean = false;

            // @ts-ignore
            valid = elem.validate(data[key]);

            if (! valid) {
                // @ts-ignore
                this.invalidElements.push(elem);
            }
        }

        return this.invalidElements.length === 0;
    }
}