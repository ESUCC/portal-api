"use strict";
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
var Portal_1 = require("./Portal");
var Settings = __importStar(require("./Settings"));
var axios_1 = __importDefault(require("axios"));
var qs_1 = __importDefault(require("qs"));
var API = /** @class */ (function () {
    function API() {
    }
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
                    'a': 'add',
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
            if (Portal_1.Portal.DEBUG) {
                console.log(query);
            }
            query.type = (query.hasOwnProperty('type') && query.type != undefined)
                ? query.type
                : 'POST';
            if (query.type.toLowerCase() == 'post') {
                axios_1.default.post(API.url(query.params), qs_1.default.stringify(query.data))
                    .then(function (response) {
                    if (Portal_1.Portal.DEBUG) {
                        console.log(response);
                    }
                    resolve(response.data);
                })
                    .catch(function (error) {
                    if (Settings.DEBUG)
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
    API.URL = Settings.URL + '/api/' + Settings.VERSION;
    return API;
}());
exports.API = API;
//# sourceMappingURL=API.js.map