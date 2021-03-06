"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Portal = __importStar(require("./Portal"));
var Model = /** @class */ (function () {
    function Model(params) {
        // @ts-ignore
        this.attributes = {};
        if (params !== undefined && params !== null)
            this.addAttributes(params);
    }
    Model.prototype.addAttributes = function (params) {
        var keys = Object.keys(params);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            this.addAttribute(key, params[key]);
        }
    };
    Model.prototype.addAttribute = function (name, value) {
        // @ts-ignore
        this.attributes[name] = value;
    };
    Model.prototype.getAttributes = function () {
        return this.attributes;
    };
    Model.prototype.get = function (name) {
        if (this.attributes.hasOwnProperty(name)) {
            // @ts-ignore
            return this.attributes[name];
        }
        else {
            // @ts-ignore
            return this[name];
        }
    };
    Model.prototype.set = function (name, value) {
        if (value == undefined)
            this.deleteAttribute(name);
        else
            this.addAttribute(name, value);
    };
    Model.prototype.deleteAttribute = function (name) {
        // @ts-ignore
        delete this.attributes[name];
    };
    Model.all = function (model_name) {
        return Portal.API.list(model_name);
    };
    Model.find = function (model_name, id) {
        return Portal.API.view(model_name, id);
    };
    Model.prototype.update = function (model_name) {
        var _this = this;
        return Model.find(model_name, this.get('slug')).then(function (response) {
            _this.addAttributes(response[model_name]);
            return response;
        });
    };
    Model.prototype.save = function (model_name, type) {
        var _this = this;
        var promise;
        if (!type.form.validate(this.getAttributes())) {
            promise = Promise.reject(model_name + ' failed to validate.');
        }
        else if (this.get('slug') === undefined) {
            promise = Portal.API.add(model_name, this.attributes).then(function (response) {
                _this.addAttributes(response[model_name]);
                return response;
            });
        }
        else {
            promise = Portal.API.edit(model_name, this.get('slug'), this.attributes).then(function (response) {
                _this.addAttributes(response[model_name]);
                return response;
            });
        }
        return promise;
    };
    Model.prototype.delete = function (model_name, id) {
        return Portal.API.delete(model_name, id);
    };
    Model.define = function (model_name) {
        return Portal.API.form(model_name).then(function (response) {
            return response[model_name];
        });
    };
    /**
     * Compares two models.
     *
     * Returns 0 if models are of the same type and have the same slug.
     * The return value is negative if they are different model types
     * and positive if they are different slugs but of the same type.
     *
     * @param model1
     * @param model2
     *
     * @return number
     */
    Model.compare = function (model1, model2) {
        var out;
        if (model1.model_name !== model2.model_name) {
            out = -1;
        }
        else if (model1.get('slug') !== model2.get('slug')) {
            out = 1;
        }
        else
            out = 0;
        return out;
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=Model.js.map