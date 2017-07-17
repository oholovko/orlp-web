"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var startPage_service_1 = require("./startPage.service");
var orlp_service_1 = require("../../orlp.service");
var StartPageComponent = (function () {
    function StartPageComponent(startPageService, orlp) {
        this.startPageService = startPageService;
        this.orlp = orlp;
    }
    StartPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startPageService.getCategories()
            .subscribe(function (category) { return _this.categories = category; }, function (error) { return _this.errorMessage = error; });
    };
    StartPageComponent.prototype.getCategoryLink = function (link) {
        return this.orlp.getShortLink(link);
    };
    return StartPageComponent;
}());
StartPageComponent = __decorate([
    core_1.Component({
        template: require('app/page/mainPage/startPage.component.html!text')
    }),
    __metadata("design:paramtypes", [startPage_service_1.StartPageService,
        orlp_service_1.ORLPService])
], StartPageComponent);
exports.StartPageComponent = StartPageComponent;
//# sourceMappingURL=startPage.component.js.map