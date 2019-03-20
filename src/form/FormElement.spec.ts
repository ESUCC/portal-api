import {FormElement} from "./FormElement";
import {Portal} from "../Portal";

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

describe('Form Element Faker', () => {
    const TYPES = [
        'text'
        , 'email'
        , 'url'
        , 'number'
        , 'ip'
    ];

    for (let type of TYPES) {
        test(Portal.ucfirst(type) + ' can be faked', () => {
            let element = new FormElement('Test Element', type, true);

            expect(element.validate(element.fake())).toBe(true);
        });
    }
});
