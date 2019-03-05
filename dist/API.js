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
const Portal_1 = require("./Portal");
const Settings = __importStar(require("./Settings"));
const axios_1 = __importDefault(require("axios"));
class API {
    static list(model) {
        return new Promise((resolve, reject) => {
            API.request({
                'params': {
                    'm': model
                }
            })
                .then((response) => {
                resolve(response);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    static view(model, id) {
        return new Promise((resolve, reject) => {
            API.request({
                'params': {
                    'm': model,
                    'id': id
                }
            })
                .then((response) => {
                resolve(response);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    static add(model, data) {
        return new Promise((resolve, reject) => {
            API.request({
                'params': {
                    'm': model,
                    'a': 'add'
                },
                'data': data
            })
                .then((response) => {
                resolve(response);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    static edit(model, id, data) {
        return new Promise((resolve, reject) => {
            API.request({
                'params': {
                    'm': model,
                    'a': 'add',
                    'id': id
                },
                'data': data
            })
                .then((response) => {
                resolve(response);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    static delete(model, id) {
        return new Promise((resolve, reject) => {
            API.request({
                'params': {
                    'm': model,
                    'a': 'delete',
                    'id': id
                }
            })
                .then((response) => {
                resolve(response);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    static form(model) {
        return new Promise((resolve, reject) => {
            API.request({
                'params': {
                    'm': model,
                    'a': 'form'
                }
            })
                .then((response) => {
                resolve(response);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    static request(query) {
        return new Promise((resolve, reject) => {
            if (Portal_1.Portal.DEBUG) {
                console.log(query);
            }
            query.type = (query.hasOwnProperty('type') && query.type != undefined)
                ? query.type
                : 'POST';
            if (query.type.toLowerCase() == 'post') {
                axios_1.default.post(API.url(query.params), query.data)
                    .then((response) => {
                    resolve(response);
                })
                    .catch((error) => {
                    reject(error);
                });
            }
        });
    }
    static url(params) {
        const keys = Object.keys(params);
        let url = API.URL + "?";
        for (let key of keys) {
            // @ts-ignore
            url += key + "=" + params[key];
        }
        return url;
    }
}
API.URL = Settings.URL + '/api/' + Settings.VERSION;
exports.API = API;
//# sourceMappingURL=API.js.map