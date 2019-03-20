"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Form_1 = require("./Form");
var FormElement_1 = require("./FormElement");
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
describe('Form', function () {
    var form = new Form_1.Form();
    var elem = new FormElement_1.FormElement('Test Elem', 'text', true);
    test('Elements can be added', function () {
        form.addElement(elem);
        form.addElement(new FormElement_1.FormElement('Name', 'text', true));
        form.addElement(new FormElement_1.FormElement('Description', 'textarea', true));
        form.addElement(new FormElement_1.FormElement('Url', 'url', false));
    });
    test('Elements can be accessed', function () {
        expect(form.getElement(elem.name)).toBe(elem);
    });
    test('Elements can be removed', function () {
        expect(form.removeElement(elem.name)).toBe(elem);
    });
    test('Can be validated with all fields', function () {
        expect(form.validate({
            "name": "Test",
            "description": "This is a test",
            "url": "http://example.com"
        })).toBe(true);
    });
    test('Can be validated without non-required fields', function () {
        expect(form.validate({
            "name": "Test",
            "description": "This is a test"
        })).toBe(true);
    });
    test('Refuses to validate if missing required field', function () {
        expect(form.validate({
            "name": "Test",
            "url": "http://example.com"
        })).toBe(false);
    });
    test('Refuses to validate if invalid required field', function () {
        expect(form.validate({
            "name": "",
            "description": "This is a test",
            "url": "Not url"
        })).toBe(false);
    });
    test('Refuses to validate if invalid non-required field', function () {
        expect(form.validate({
            "name": "Test",
            "description": "This is a test",
            "url": "Not url"
        })).toBe(false);
    });
});
//# sourceMappingURL=Form.spec.js.map