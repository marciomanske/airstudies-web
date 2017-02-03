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
import { Router } from '@angular/router';
import { LoginService } from "../login/login.service";
export var AuthGuardService = (function () {
    function AuthGuardService(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var okGo = this.loginService.loggedIn();
        if (!okGo) {
            this.router.navigate(['/main']);
        }
        return okGo;
    };
    AuthGuardService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [LoginService, Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/services/authguard/authguard.service.js.map