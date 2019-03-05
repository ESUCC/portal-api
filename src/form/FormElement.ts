// @ts-ignore
import validator from 'validator';

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

        if (value !== undefined) {
            switch (this.type.toLowerCase()) {
                case 'text':
                case 'textarea':
                    valid = !validator.isEmpty(value);
                    break;
                case 'email':
                    valid = validator.isEmail(value);
                    break;
                case 'url':
                    valid = validator.isURL(value);
                    break;
                case 'number':
                    valid = validator.isInt(value);
                    break;
                case 'ip':
                    valid = validator.isIP(value);
                    break;
                case 'grouptype':
                    valid = !validator.isEmpty(value);
                    break;
                case 'file':
                default:
                    valid = value !== undefined || value !== null;
                    break;
            }
        }

        if (! this.required && (value == undefined || value == '' || value == null))
            valid = true;

        return valid;
    }
}