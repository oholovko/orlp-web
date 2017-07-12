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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var login_service_1 = require("./login.service");
var login_component_1 = require("./login.component");
var angular2_social_login_1 = require("angular2-social-login");
var providers = {
    "google": {
        "clientId": "382441109972-qj4emrs9s68ihflvgkfi7olctcildocr.apps.googleusercontent.com"
    }
};
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            angular2_social_login_1.Angular2SocialLoginModule,
            router_1.RouterModule.forRoot([
                { path: 'login', component: login_component_1.LoginComponent }
            ])
        ],
        exports: [],
        declarations: [
            login_component_1.LoginComponent
        ],
        providers: [login_service_1.LoginService],
    }),
    __metadata("design:paramtypes", [])
], LoginModule);
exports.LoginModule = LoginModule;
angular2_social_login_1.Angular2SocialLoginModule.loadProvidersScripts(providers);
//# sourceMappingURL=login.module.js.map