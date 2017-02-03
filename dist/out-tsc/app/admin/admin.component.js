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
export var AdminComponent = (function () {
    function AdminComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.userData = this.loginService.getUserData();
    }
    AdminComponent.prototype.logoutClick = function () {
        this.loginService.logout();
        this.router.navigate(['/']);
    };
    AdminComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ["admin.component.css"]
        }), 
        __metadata('design:paramtypes', [LoginService, Router])
    ], AdminComponent);
    return AdminComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/admin/admin.component.js.map