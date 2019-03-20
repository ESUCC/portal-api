import validator from 'validator';
import faker from 'faker';

export class FormElement {
    name: string;
    type: string;
    required: boolean;

    constructor(name: string, type: string, required: boolean = false) {
        this.name = name;
        this.type = type;
        this.required = required;
    }

    validate(value: any): boolean {
        let valid: boolean = false;

        if (value !== undefined && value !== null) {
            switch (this.type.toLowerCase()) {
                case 'text':
                case 'textarea':
                    valid = ! validator.isEmpty(value);
                    break;
                case 'email':
                    valid = validator.isEmail(value);
                    break;
                case 'url':
                    valid = validator.isURL(value);
                    break;
                case 'number':
                    if (isNaN(value)) valid = validator.isInt(value);
                    else valid = true;
                    break;
                case 'ip':
                    valid = validator.isIP(value);
                    break;
                case 'grouptype':
                    valid = ! validator.isEmpty(value);
                    break;
                case 'file':
                default:
                    valid = true;
                    break;
            }
        }

        if (! this.required && (value === null || value === undefined || value == ''))
            valid = true;

        return valid;
    }

    fake() {
        let fake;

        switch (this.type.toLowerCase()) {
            case 'text':
                fake = faker.lorem.word();
                break;
            case 'textarea':
                fake = faker.lorem.paragraph(3);
                break;
            case 'email':
                fake = faker.internet.exampleEmail();
                break;
            case 'url':
                fake = faker.internet.url();
                break;
            case 'number':
                fake = faker.random.number();
                break;
            case 'ip':
                fake = faker.internet.ip();
                break;
            case 'grouptype':
                fake = 'NOT YET';
                break;
            case 'file':
            default:
                fake = 'placeholder :(';
                break;
        }

        return fake;
    }
}