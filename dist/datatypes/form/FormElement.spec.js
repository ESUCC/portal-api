"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FormElement_1 = require("./FormElement");
var Portal = __importStar(require("../../Portal"));
describe('Form Element', function () {
    test('Refuses to validate if required and not set', function () {
        var element = new FormElement_1.FormElement('Test Element', 'text', true);
        expect(element.validate(undefined)).toBe(false);
    });
    test('Text fails to validate if empty', function () {
        var element = new FormElement_1.FormElement('Test Text', 'text', true);
        expect(element.validate('')).toBe(false);
    });
    test('Text validates if empty and not required', function () {
        var element = new FormElement_1.FormElement('Test Text', 'text', false);
        expect(element.validate('')).toBe(true);
    });
    test('Correct email validates', function () {
        var element = new FormElement_1.FormElement('Test Email', 'email', false);
        expect(element.validate('test@email.com')).toBe(true);
    });
    test('Incorrect email fails to validate', function () {
        var element = new FormElement_1.FormElement('Test Email', 'email', false);
        expect(element.validate('test@email')).toBe(false);
    });
    test('Correct url validates', function () {
        var element = new FormElement_1.FormElement('Test URL', 'url', false);
        expect(element.validate('http://example.com')).toBe(true);
    });
    test('Incorrect url fails to validate', function () {
        var element = new FormElement_1.FormElement('Test URL', 'url', false);
        expect(element.validate('example.')).toBe(false);
    });
    test('Correct number validates', function () {
        var element = new FormElement_1.FormElement('Test Number', 'number', false);
        expect(element.validate('47')).toBe(true);
    });
    test('Incorrect number fails to validate', function () {
        var element = new FormElement_1.FormElement('Test Number', 'number', false);
        expect(element.validate('forty seven.')).toBe(false);
    });
    test('Correct ip validates', function () {
        var element = new FormElement_1.FormElement('Test IP', 'ip', false);
        expect(element.validate('127.0.0.1')).toBe(true);
    });
    test('Incorrect ip fails to validate', function () {
        var element = new FormElement_1.FormElement('Test IP', 'ip', false);
        expect(element.validate('localhost')).toBe(false);
    });
});
describe('Form Element Faker', function () {
    var TYPES = [
        'text',
        'email',
        'url',
        'number',
        'ip'
    ];
    var _loop_1 = function (type) {
        test(Portal.ucfirst(type) + ' can be faked', function () {
            var element = new FormElement_1.FormElement('Test Element', type, true);
            expect(element.validate(element.fake())).toBe(true);
        });
    };
    for (var _i = 0, TYPES_1 = TYPES; _i < TYPES_1.length; _i++) {
        var type = TYPES_1[_i];
        _loop_1(type);
    }
});
//# sourceMappingURL=FormElement.spec.js.map