"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Settings = __importStar(require("./Settings"));
const API_1 = require("./API");
const Model_1 = require("./Model");
var Portal;
(function (Portal) {
    Portal.VERSION = Settings.VERSION;
    Portal.URL = Settings.URL;
    Portal.DEBUG = Settings.DEBUG;
    Portal.API = API_1.API;
    Portal.Model = Model_1.Model;
})(Portal = exports.Portal || (exports.Portal = {}));
//# sourceMappingURL=Portal.js.map