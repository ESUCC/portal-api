"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Image = /** @class */ (function () {
    function Image() {
    }
    Image.prototype.attachInput = function (element) {
        var _this = this;
        return new Promise(function (resolve) {
            element.addEventListener('change', function (event) {
                // @ts-ignore
                _this.file = event.target.files[0];
                resolve(_this.file);
            });
        });
    };
    return Image;
}());
exports.Image = Image;
//# sourceMappingURL=Image.js.map