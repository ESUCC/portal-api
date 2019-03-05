import { Portal } from './Portal';
import * as Settings from './Settings';

describe('Settings in Portal namespace', () => {
    const keys = Object.keys(Settings);

    for (let key of keys) {
        test(key, () => {
            // @ts-ignore
            expect(Portal[key]).toBe(Settings[key]);
        })
    }
});