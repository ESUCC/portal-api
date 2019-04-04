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
                fake = "data:image/png;base64,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";
                break;
        }
        return fake;
    };
    return FormElement;
}());
exports.FormElement = FormElement;
//# sourceMappingURL=FormElement.js.map