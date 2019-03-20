"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Portal_1 = require("./Portal");
var Settings = __importStar(require("./Settings"));
describe('Settings in Portal namespace', function () {
    var keys = Object.keys(Settings);
    var _loop_1 = function (key) {
        test(key, function () {
            // @ts-ignore
            expect(Portal_1.Portal[key]).toBe(Settings[key]);
        });
    };
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        _loop_1(key);
    }
});
//# sourceMappingURL=Portal.spec.js.map