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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Portal_1 = require("./Portal");
var App_1 = require("./models/App");
var MODELS = [
    App_1.App,
];
var modelAllLoaded = {};
var testModel;
function modelAll(model) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!modelAllLoaded.hasOwnProperty(model.model_name)) return [3 /*break*/, 2];
                    return [4 /*yield*/, model.all().then(function (response) {
                            // @ts-ignore
                            modelAllLoaded[model.model_name] = response;
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: 
                // @ts-ignore
                return [2 /*return*/, modelAllLoaded[model.model_name]];
            }
        });
    });
}
var _loop_1 = function (model) {
    describe(Portal_1.Portal.ucfirst(model.model_name), function () {
        test('Model will boot', function () {
            new model(); // should boot
            expect(Portal_1.Portal.App.booted).toBe(true);
        });
        test('Model can access API', function () {
            return modelAll(model).then(function (all) {
                expect(all).toBeDefined();
            });
        });
        test('`all()` returns a promise with list of model instances', function () {
            return modelAll(model).then(function (all) {
                expect(all[0].get('slug')).toBeDefined();
            });
        });
        test('`find(slug)` returns a promise with a model instance', function () {
            return model.all().then(function (models) { return __awaiter(_this, void 0, void 0, function () {
                var slug;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            slug = '';
                            return [4 /*yield*/, modelAll(model).then(function (all) {
                                    slug = all[0].get('slug');
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, model.find(slug).then(function (tmp_model) {
                                    // @ts-ignore
                                    if (tmp_model == undefined) {
                                        console.log(tmp_model);
                                        throw Error('tmp_model not defined');
                                    }
                                    expect(tmp_model.get('slug')).toBe(slug);
                                    testModel = tmp_model;
                                })];
                    }
                });
            }); });
        });
        test('Model can set and get attributes', function () {
            var attribute = 'test_attribute';
            var value = "test_value";
            if (testModel == undefined) {
                throw Error('testModel not defined');
            }
            testModel.set(attribute, value);
            expect(testModel.get(attribute)).toBe(value);
            testModel.set(attribute, undefined);
            testModel = undefined;
        });
        test('`create(attributes)` returns a promise with a model ' +
            'instance that has been saved to the server', function () {
            if (model.model_name == App_1.App.model_name) {
                return model.create({
                    'name': 'test-name',
                    'url': 'https://test.url',
                    'iconPath': 'testing/path'
                }).then(function (response) {
                    expect(response.get('slug')).toBeDefined();
                    testModel = response;
                });
            }
        });
        test('`save()` method saves via the API', function () { return __awaiter(_this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (testModel == undefined) {
                            throw Error('testModel not defined');
                        }
                        name = testModel.get('name') + '-testing';
                        testModel.set('name', name);
                        return [4 /*yield*/, testModel.save()];
                    case 1:
                        _a.sent();
                        expect(testModel.get('name')).toBe(name);
                        return [2 /*return*/];
                }
            });
        }); });
        test('`update()` method updates the model with the current ' +
            'information from the API', function () { return __awaiter(_this, void 0, void 0, function () {
            var tmp_model, name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (testModel == undefined) {
                            throw Error('testModel not defined');
                        }
                        return [4 /*yield*/, model.find(testModel.get('slug')).then(function (response) {
                                tmp_model = response;
                            })];
                    case 1:
                        _a.sent();
                        // @ts-ignore
                        if (tmp_model == undefined) {
                            throw Error('tmp_model not defined');
                        }
                        name = tmp_model.get('name');
                        name = name.substring(0, name.indexOf('-testing'));
                        tmp_model.set('name', name);
                        return [4 /*yield*/, tmp_model.save()];
                    case 2:
                        _a.sent();
                        expect(testModel.get('name')).toBe(name + '-testing');
                        return [4 /*yield*/, testModel.update()];
                    case 3:
                        _a.sent();
                        expect(testModel.get('name')).toBe(name);
                        return [2 /*return*/];
                }
            });
        }); });
        test('`delete()` method deletes the model via the API', function () { return __awaiter(_this, void 0, void 0, function () {
            var slug;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (testModel == undefined) {
                            throw Error('testModel not defined');
                        }
                        slug = testModel.get('slug');
                        return [4 /*yield*/, testModel.delete().then(function (response) {
                                expect(response).toBeTruthy();
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, model.find(slug).then(function (response) {
                                expect(response).toBeUndefined();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
};
for (var _i = 0, MODELS_1 = MODELS; _i < MODELS_1.length; _i++) {
    var model = MODELS_1[_i];
    _loop_1(model);
}
//# sourceMappingURL=Model.spec.js.map