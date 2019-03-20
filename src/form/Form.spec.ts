import {Form} from "./Form";
import {FormElement} from "./FormElement";

describe('Form', () => {
    let form = new Form();
    let elem = new FormElement('Test Elem', 'text', true);

    test('Elements can be added', () => {
        form.addElement(elem);
        form.addElement(new FormElement('Name', 'text', true));
        form.addElement(new FormElement('Description', 'textarea', true));
        form.addElement(new FormElement('Url', 'url', false));
    });

    test('Elements can be accessed', () => {
        expect(form.getElement(elem.name)).toBe(elem);
    });

    test('Elements can be removed', () => {
        expect(form.removeElement(elem.name)).toBe(elem);
    });

    test('Can be validated with all fields', () => {
        expect(form.validate({
            "name": "Test",
            "description": "This is a test",
            "url": "http://example.com"
        })).toBe(true);
    });

    test('Can be validated without non-required fields', () => {
        expect(form.validate({
            "name": "Test",
            "description": "This is a test"
        })).toBe(true);
    });

    test('Refuses to validate if missing required field', ()=> {
        expect(form.validate({
            "name": "Test",
            "url": "http://example.com"
        })).toBe(false);
    });

    test('Refuses to validate if invalid required field', ()=> {
        expect(form.validate({
            "name": "",
            "description": "This is a test",
            "url": "Not url"
        })).toBe(false);
    });

    test('Refuses to validate if invalid non-required field', ()=> {
        expect(form.validate({
            "name": "Test",
            "description": "This is a test",
            "url": "Not url"
        })).toBe(false);
    });

    test('Factory will generate a valid form', () => {
        expect(form.validate(form.factory())).toBeTruthy();
    });
});