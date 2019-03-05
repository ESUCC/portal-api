import {Portal} from "./Portal";
import {App} from "./models/App";

describe('App', () => {
    test('Model is booted', () => {
        expect(Portal.App.model_name).toBe('app');
    });

    test('Model can access API', () => {
        App.list();
    });
});