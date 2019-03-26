"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Image_1 = require("./Image");
var ImageManager = /** @class */ (function () {
    function ImageManager() {
        this.update = true;
    }
    ImageManager.prototype.attachInput = function (element) {
        if (this.current === undefined)
            this.current = new Image_1.Image();
        return this.current.attachInput(element);
    };
    ImageManager.prototype.resolve = function () {
        return (this.update && this.current !== undefined)
            ? this.current
            : this.old;
    };
    return ImageManager;
}());
exports.ImageManager = ImageManager;
//# sourceMappingURL=ImageManager.js.map