"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Portal_1 = require("./Portal");
class Model {
    constructor(name, params) {
        this.model_name = name;
        // @ts-ignore
        this.attributes = {};
        this.addAttributes(params);
    }
    addAttributes(params) {
        const keys = Object.keys(params);
        for (let key of keys) {
            this.addAttribute(key, params[key]);
        }
    }
    addAttribute(name, value) {
        // @ts-ignore
        this.attributes[name] = value;
    }
    get(name) {
        if (this.attributes.hasOwnProperty(name)) {
            // @ts-ignore
            return this.attributes[name];
        }
        else {
            // @ts-ignore
            return this[name];
        }
    }
    set(name, value) {
        this.addAttribute(name, value);
    }
    static list() {
        return Portal_1.Portal.API.list(this.model_name);
    }
    static view(id) {
        return Portal_1.Portal.API.view(this.model_name, id);
    }
    static add() {
    }
}
exports.Model = Model;
//# sourceMappingURL=Model.js.map