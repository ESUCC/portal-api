"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../Model");
var ModelInterface_1 = require("../interfaces/ModelInterface");
var pluralize = require("pluralize");
var Form_1 = require("../datatypes/form/Form");
var IpAddress = /** @class */ (function (_super) {
    __extends(IpAddress, _super);
    function IpAddress(params) {
        var _this = _super.call(this, params) || this;
        _this.type = IpAddress_1;
        (_this.type.booted || _this.type.boot());
        return _this;
    }
    IpAddress_1 = IpAddress;
    IpAddress.boot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.booted)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.define()];
                    case 1:
                        _a.sent();
                        this.booted = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    IpAddress.prototype.get = function (name) {
        return _super.prototype.get.call(this, name);
    };
    IpAddress.prototype.set = function (name, value) {
        return _super.prototype.set.call(this, name, value);
    };
    IpAddress.all = function () {
        var _this = this;
        return _super.all.call(this, this.model_name).then(function (response) {
            var models = [];
            for (var _i = 0, _a = response[pluralize(_this.model_name)]; _i < _a.length; _i++) {
                var modelData = _a[_i];
                models.push(new _this(modelData));
            }
            return models;
        });
    };
    IpAddress.find = function (id) {
        var _this = this;
        return _super.find.call(this, this.model_name, id).then(function (response) {
            if (!response.hasOwnProperty(_this.model_name))
                return undefined;
            else
                return new _this(response[_this.model_name]);
        });
    };
    IpAddress.prototype.update = function () {
        var _this = this;
        return _super.prototype.update.call(this, this.type.model_name).then(function () {
            return _this;
        });
    };
    IpAddress.prototype.save = function () {
        return _super.prototype.save.call(this, this.type.model_name, this.type);
    };
    IpAddress.create = function (attributes) {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = new this(attributes);
                        return [4 /*yield*/, model.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, model];
                }
            });
        });
    };
    IpAddress.prototype.delete = function () {
        return _super.prototype.delete.call(this, this.type.model_name, this.get('slug')).then(function (response) { return response.success; });
    };
    IpAddress.define = function () {
        var _this = this;
        return _super.define.call(this, this.model_name).then(function (response) {
            _this.form = new Form_1.Form(response);
            return _this.form;
        });
    };
    IpAddress.factory = function () {
        return new this(this.form.factory());
    };
    IpAddress.prototype.validate = function () {
        return this.type.form.validate(_super.prototype.getAttributes.call(this));
    };
    var IpAddress_1;
    IpAddress.model_name = 'ipaddress';
    IpAddress.booted = false;
    IpAddress = IpAddress_1 = __decorate([
        ModelInterface_1.staticImplements()
    ], IpAddress);
    return IpAddress;
}(Model_1.Model));
exports.IpAddress = IpAddress;
//# sourceMappingURL=IpAddress.js.map