"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormElement_1 = require("./FormElement");
var Form = /** @class */ (function () {
    function Form(elements) {
        this.elements = [];
        this.invalidElements = [];
        if (elements !== undefined) {
            if (Array.isArray(elements))
                this.elements = elements;
            else {
                this.fromJSON(elements);
            }
        }
    }
    Form.prototype.fromJSON = function (elements) {
        var keys = Object.keys(elements);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            // @ts-ignore
            var elem = new FormElement_1.FormElement(key, elements[key].type, elements[key].required);
            this.addElement(elem);
        }
    };
    Form.prototype.addElement = function (element) {
        this.elements.push(element);
    };
    Form.prototype.getElement = function (name) {
        return this.elements.find(function (elem) { return elem.name.toLowerCase() == name.toLowerCase(); });
    };
    Form.prototype.removeElement = function (name) {
        var elem = this.elements.find(function (elem) { return elem.name.toLowerCase() == name.toLowerCase(); });
        if (elem === undefined)
            return undefined;
        // @ts-ignore
        var index = this.elements.indexOf(elem);
        return this.elements.splice(index, 1)[0];
    };
    Form.prototype.invalid = function () {
        return this.invalidElements;
    };
    Form.prototype.valid = function () {
        var _this = this;
        return this.elements.filter(function (elem) { return _this.invalid().indexOf(elem) < 0; });
    };
    Form.prototype.validate = function (data) {
        var _this = this;
        this.invalidElements = [];
        this.elements.forEach(function (elem) {
            if (data.hasOwnProperty(elem.name.toLowerCase())) {
                var valid = elem.validate(data[elem.name.toLowerCase()]);
                if (!valid)
                    _this.invalidElements.push(elem);
            }
            else {
                if (elem.required)
                    _this.invalidElements.push(elem);
            }
        });
        return this.invalidElements.length === 0;
    };
    Form.prototype.factory = function () {
        // @ts-ignore
        var out = {};
        this.elements.filter(function (value) {
            // @ts-ignore
            out[value.name.toLowerCase()] = value.fake();
        });
        return out;
    };
    return Form;
}());
exports.Form = Form;
//# sourceMappingURL=Form.js.map