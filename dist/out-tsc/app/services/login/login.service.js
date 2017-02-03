var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { tokenNotExpired } from 'angular2-jwt';
import { LoginResult } from "../../dto/LoginResult";
import { ConfigService } from "../../config/config.service";
import { BaseHttpService } from "../base/base-http.service";
export var LoginService = (function (_super) {
    __extends(LoginService, _super);
    function LoginService(http, config) {
        _super.call(this, http, "user", config);
        this.http = http;
        this.config = config;
    }
    LoginService.prototype.login = function (data) {
        return this.http.post(this.config.url.user.login, data, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var result = res.json();
            localStorage.setItem("token", result.token);
            localStorage.setItem("user", JSON.stringify(result.user));
            return result;
        })
            .catch(function (error) {
            console.log(error);
            return new LoginResult(2, null, "Error processing login", null);
        });
    };
    LoginService.prototype.recoverPassword = function (email) {
        var postUrl = this.config.url.user.recoverPassword + "/" + email;
        return this.executeOther(postUrl, "post", {});
    };
    LoginService.prototype.loggedIn = function () {
        return tokenNotExpired("token");
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };
    LoginService.prototype.getUserData = function () {
        var user = JSON.parse(localStorage.getItem("user"));
        var token = localStorage.getItem("token");
        return new LoginResult(0, token, null, user);
    };
    LoginService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, ConfigService])
    ], LoginService);
    return LoginService;
}(BaseHttpService));
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/services/login/login.service.js.map