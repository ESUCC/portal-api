"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Settings = __importStar(require("./Settings"));
var API_1 = require("./API");
var Model_1 = require("./Model");
var App_1 = require("./models/App");
var Portal;
(function (Portal) {
    Portal.VERSION = Settings.VERSION;
    Portal.URL = Settings.URL;
    Portal.DEBUG = Settings.DEBUG;
    Portal.API = API_1.API;
    Portal.Model = Model_1.Model;
    Portal.App = App_1.App;
    Portal.App.boot();
    function ucfirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    Portal.ucfirst = ucfirst;
})(Portal = exports.Portal || (exports.Portal = {}));
//# sourceMappingURL=Portal.js.map