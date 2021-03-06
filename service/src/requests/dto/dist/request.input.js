"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RequestInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var graphql_type_json_1 = require("graphql-type-json");
var RequestInput = /** @class */ (function () {
    function RequestInput() {
    }
    __decorate([
        graphql_1.Field()
    ], RequestInput.prototype, "userId");
    __decorate([
        graphql_1.Field()
    ], RequestInput.prototype, "comment");
    __decorate([
        graphql_1.Field()
    ], RequestInput.prototype, "commentTime");
    __decorate([
        graphql_1.Field()
    ], RequestInput.prototype, "name");
    __decorate([
        graphql_1.Field(function (type) { return graphql_type_json_1["default"]; })
    ], RequestInput.prototype, "product");
    RequestInput = __decorate([
        graphql_1.InputType()
    ], RequestInput);
    return RequestInput;
}());
exports.RequestInput = RequestInput;
