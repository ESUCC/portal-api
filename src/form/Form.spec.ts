import {Form} from "./Form";
import {FormElement} from "./FormElement";

describe('Form Element', () => {
    test('Refuses to validate if required and not set', () => {
        let element = new FormElement('Test Element', 'text', true);

        expect(element.validate(undefined)).toBe(false);
    });

    test('Text fails to validate if empty', () => {
        let element = new FormElement('Test Text', 'text', true);

        expect(element.validate('')).toBe(false);
    });

    test('Text validates if empty and not required', () => {
        let element = new FormElement('Test Text', 'text', false);

        expect(element.validate('')).toBe(true);
    });

    test('Correct email validates', () => {
        let element = new FormElement('Test Email', 'email', false);

        expect(element.validate('test@email.com')).toBe(true);
    });

    test('Incorrect email fails to validate', () => {
        let element = new FormElement('Test Email', 'email', false);

        expect(element.validate('test@email')).toBe(false);
    });

    test('Correct url validates', () => {
        let element = new FormElement('Test URL', 'url', false);

        expect(element.validate('http://example.com')).toBe(true);
    });

    test('Incorrect url fails to validate', () => {
        let element = new FormElement('Test URL', 'url', false);

        expect(element.validate('example.')).toBe(false);
    });

    test('Correct number validates', () => {
        let element = new FormElement('Test Number', 'number', false);

        expect(element.validate('47')).toBe(true);
    });

    test('Incorrect number fails to validate', () => {
        let element = new FormElement('Test Number', 'number', false);

        expect(element.validate('forty seven.')).toBe(false);
    });

    test('Correct ip validates', () => {
        let element = new FormElement('Test IP', 'ip', false);

        expect(element.validate('127.0.0.1')).toBe(true);
    });

    test('Incorrect ip fails to validate', () => {
        let element = new FormElement('Test IP', 'ip', false);

        expect(element.validate('localhost')).toBe(false);
    });
});

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
});