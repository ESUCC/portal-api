"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Form_1 = require("./Form");
var FormElement_1 = require("./FormElement");
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
    test('Factory will generate a valid form', function () {
        expect(form.validate(form.factory())).toBeTruthy();
    });
});
//# sourceMappingURL=Form.spec.js.map