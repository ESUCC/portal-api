"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var importSettings = __importStar(require("./Settings"));
var API_1 = require("./API");
var Model_1 = require("./Model");
var App_1 = require("./models/App");
var User_1 = require("./models/User");
var Image_1 = require("./datatypes/image/Image");
exports.Settings = importSettings;
exports.API = API_1.API;
exports.Model = Model_1.Model;
exports.App = App_1.App;
exports.User = User_1.User;
function ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.ucfirst = ucfirst;
function init(options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    /*
                     * Handle Options
                     *
                     * Update the settings before booting any object.
                     */
                    if (options) {
                        if (options.hasOwnProperty('settings')) {
                            // @ts-ignore
                            updateSettings(options.settings);
                        }
                    }
                    /*
                     * Boot API before models.
                     *
                     * This will ensure that the API is ready to use before the models use it.
                     */
                    return [4 /*yield*/, exports.API.boot()];
                case 1:
                    /*
                     * Boot API before models.
                     *
                     * This will ensure that the API is ready to use before the models use it.
                     */
                    _a.sent();
                    /*
                     * Boot models.
                     */
                    return [4 /*yield*/, exports.App.boot()];
                case 2:
                    /*
                     * Boot models.
                     */
                    _a.sent();
                    return [4 /*yield*/, exports.User.boot()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.init = init;
function updateSettings(options) {
    var keys = Object.keys(options);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        // @ts-ignore
        importSettings[key] = options[key];
    }
}
var datatypes;
(function (datatypes) {
    datatypes.Image = Image_1.Image;
})(datatypes = exports.datatypes || (exports.datatypes = {}));
//# sourceMappingURL=Portal.js.map