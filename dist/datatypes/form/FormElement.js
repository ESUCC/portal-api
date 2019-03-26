"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __importDefault(require("validator"));
var faker_1 = __importDefault(require("faker"));
var FormElement = /** @class */ (function () {
    function FormElement(name, type, required) {
        if (required === void 0) { required = false; }
        this.name = name;
        this.type = type;
        this.required = required;
    }
    FormElement.prototype.validate = function (value) {
        var valid = false;
        if (value !== undefined && value !== null) {
            switch (this.type.toLowerCase()) {
                case 'text':
                case 'textarea':
                    valid = !validator_1.default.isEmpty(value);
                    break;
                case 'email':
                    valid = validator_1.default.isEmail(value);
                    break;
                case 'url':
                    valid = validator_1.default.isURL(value);
                    break;
                case 'number':
                    if (isNaN(value))
                        valid = validator_1.default.isInt(value);
                    else
                        valid = true;
                    break;
                case 'ip':
                    valid = validator_1.default.isIP(value);
                    break;
                case 'grouptype':
                    valid = !validator_1.default.isEmpty(value);
                    break;
                case 'file':
                default:
                    valid = true;
                    break;
            }
        }
        if (!this.required && (value === null || value === undefined || value == ''))
            valid = true;
        return valid;
    };
    FormElement.prototype.fake = function () {
        var fake;
        switch (this.type.toLowerCase()) {
            case 'text':
                fake = faker_1.default.lorem.word();
                break;
            case 'textarea':
                fake = faker_1.default.lorem.paragraph(3);
                break;
            case 'email':
                fake = faker_1.default.internet.exampleEmail();
                break;
            case 'url':
                fake = faker_1.default.internet.url();
                break;
            case 'number':
                fake = faker_1.default.random.number();
                break;
            case 'ip':
                fake = faker_1.default.internet.ip();
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
    };
    return FormElement;
}());
exports.FormElement = FormElement;
//# sourceMappingURL=FormElement.js.map