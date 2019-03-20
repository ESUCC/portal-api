"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Form = /** @class */ (function () {
    function Form(elements) {
        this.elements = [];
        this.invalidElements = [];
        if (elements !== undefined)
            this.elements = elements;
    }
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
    return Form;
}());
exports.Form = Form;
//# sourceMappingURL=Form.js.map