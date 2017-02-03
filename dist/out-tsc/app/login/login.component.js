var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../services/login/login.service";
export var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        //userLogin = new UserLogin(null, null, null);
        this.emailRecover = null;
        this.errorMessage = null;
        this.showError = false;
        this.recoverErrorMessage = null;
        this.recoverMessage = null;
    }
    LoginComponent.prototype.signinClick = function (username, password) {
        var _this = this;
        this.loginService.login({ username: username, password: password, companyCode: "ADMIN" }).then(function (res) {
            if (res.status === 1) {
                _this.loginSuccess(res);
            }
            else {
                _this.loginFail(res);
            }
        });
    };
    LoginComponent.prototype.loginSuccess = function (result) {
        this.router.navigate(['/admin']);
    };
    LoginComponent.prototype.loginFail = function (result) {
        this.errorMessage = result.message;
        this.showError = true;
        var that = this;
        setTimeout(function () {
            that.showError = false;
        }, 5000);
    };
    LoginComponent.prototype.recoverPassord = function (email) {
        var _this = this;
        this.recoverMessage = null;
        this.recoverErrorMessage = null;
        if (email === null && email.trim() === "") {
            this.recoverErrorMessage = "Email cannot be empty!";
            return;
        }
        this.loginService.recoverPassword(email).then(function (res) {
            if (res.status && res.status === 1) {
                _this.recoverMessage = "Email sent";
            }
            else {
                _this.recoverErrorMessage = res.message;
            }
            /*
            if (res.success) {
              this.recoverMessage = "Email sent";
            } else {
              this.recoverErrorMessage = res.message;
            } */
            setTimeout(function () {
                _this.emailRecover = null;
                _this.recoverMessage = null;
                _this.recoverErrorMessage = null;
            }, 3000);
        });
    };
    LoginComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'app-header',
            templateUrl: './login.component.html',
            providers: [LoginService]
        }), 
        __metadata('design:paramtypes', [Router, LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/login/login.component.js.map