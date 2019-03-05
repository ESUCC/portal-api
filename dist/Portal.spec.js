"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Portal_1 = require("./Portal");
const Settings = __importStar(require("./Settings"));
const Model_1 = require("./Model");
describe('Constants work in Portal namespace', () => {
    const keys = Object.keys(Settings);
    for (let key of keys) {
        test(key, () => {
            // @ts-ignore
            expect(Portal_1.Portal[key]).toBe(Settings[key]);
        });
    }
});
describe('Model will automatically set attributes', () => {
    const model = new Model_1.Model({ 'testing': 'yes' });
    test('Passed values', () => {
        // @ts-ignore
        expect(model.get('testing')).toBe('yes');
    });
    test('Set values', () => {
        model.set('test', 'no');
        expect(model.get('test')).toBe('no');
    });
});
//# sourceMappingURL=Portal.spec.js.map