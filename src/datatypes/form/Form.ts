import {FormElement} from "./FormElement";

export class Form {
    protected elements: FormElement[] = [];
    protected invalidElements: FormElement[] = [];

    constructor(elements?: FormElement[] | JSON) {
        if (elements !== undefined) {
            if (Array.isArray(elements)) this.elements = elements;
            else {
                this.fromJSON(elements);
            }
        }

    }

    private fromJSON(elements: JSON) {
        let keys = Object.keys(elements);

        for (let key of keys) {
            // @ts-ignore
            let elem = new FormElement(key, elements[key].type, elements[key].required);
            this.addElement(elem);
        }
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

    factory() {
        // @ts-ignore
        let out: JSON = {};

        this.elements.filter((value) => {
            // @ts-ignore
            out[value.name.toLowerCase()] = value.fake();
        });

        return out;
    }
}