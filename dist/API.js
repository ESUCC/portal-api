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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Portal = __importStar(require("./Portal"));
var Settings = __importStar(require("./Settings"));
var axios_1 = __importDefault(require("axios"));
var qs_1 = __importDefault(require("qs"));
var API = /** @class */ (function () {
    function API() {
    }
    API.boot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.URL = Settings.URL + '/api/' + Settings.VERSION;
                return [2 /*return*/];
            });
        });
    };
    API.list = function (model) {
        return new Promise(function (resolve, reject) {
            API.request({
                'params': {
                    'm': model
                }
            })
                .then(function (response) {
                resolve(response);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    API.view = function (model, id) {
        return new Promise(function (resolve, reject) {
            API.request({
                'params': {
                    'm': model,
                    'id': id
                }
            })
                .then(function (response) {
                resolve(response);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    API.add = function (model, data) {
        return new Promise(function (resolve, reject) {
            API.request({
                'params': {
                    'm': model,
                    'a': 'add'
                },
                'data': data
            })
                .then(function (response) {
                resolve(response);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    API.edit = function (model, id, data) {
        return new Promise(function (resolve, reject) {
            API.request({
                'params': {
                    'm': model,
                    'a': 'edit',
                    'id': id
                },
                'data': data
            })
                .then(function (response) {
                resolve(response);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    API.delete = function (model, id) {
        return new Promise(function (resolve, reject) {
            API.request({
                'params': {
                    'm': model,
                    'a': 'delete',
                    'id': id
                }
            })
                .then(function (response) {
                resolve(response);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    API.form = function (model) {
        return new Promise(function (resolve, reject) {
            API.request({
                'params': {
                    'm': model,
                    'a': 'form'
                }
            })
                .then(function (response) {
                resolve(response);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    API.request = function (query) {
        return new Promise(function (resolve, reject) {
            if (Portal.Settings.DEBUG) {
                console.log(query);
            }
            query.type = (query.hasOwnProperty('type') && query.type != undefined)
                ? query.type
                : 'POST';
            query.hasOptions = query.hasOwnProperty('options');
            if (query.type.toLowerCase() == 'post') {
                axios_1.default.post(API.url(query.params), qs_1.default.stringify(query.data), 
                // @ts-ignore
                (query.hasOptions) ? query.options : undefined)
                    // @ts-ignore
                    .then(function (response) {
                    if (Portal.Settings.DEBUG) {
                        console.log(response);
                    }
                    if (response.data.hasOwnProperty('success') && !response.data.success)
                        reject('Response declared request unsuccessful');
                    resolve(response.data);
                })
                    // @ts-ignore
                    .catch(function (error) {
                    if (Portal.Settings.DEBUG)
                        console.log(error);
                    reject(error);
                });
            }
        });
    };
    API.url = function (params) {
        var keys = Object.keys(params);
        var url = API.URL + "?";
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            // @ts-ignore
            url += key + "=" + params[key] + "&";
        }
        return url;
    };
    return API;
}());
exports.API = API;
//# sourceMappingURL=API.js.map