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
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../services/user/user.service";
export var UserPasswordRecoverComponent = (function () {
    function UserPasswordRecoverComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.user = null;
        this.errorMessage = null;
        this.confirmMessage = null;
    }
    UserPasswordRecoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.route.snapshot.queryParams['token'];
        if (token != null) {
            this.userService.searchByToken(token).then(function (res) {
                if (res.status === 1) {
                    _this.user = res.user;
                }
                else {
                    alert(res.message);
                }
            });
        }
    };
    UserPasswordRecoverComponent.prototype.onSave = function (newPassword, newPassword2) {
        var _this = this;
        this.errorMessage = null;
        if (newPassword === null || newPassword.trim() === "") {
            this.errorMessage = "The password cannot be empty";
            return;
        }
        if (newPassword2 === null || newPassword2.trim() === "") {
            this.errorMessage = "The password cannot be empty";
            return;
        }
        if (newPassword != newPassword2) {
            this.errorMessage = "The typed passwords must be the same!";
            return;
        }
        this.userService.updatePassword(this.user.id, newPassword).then(function (res) {
            if (res.status === 1) {
                _this.confirmMessage = "Password changed successfully. Redirecting to main page...";
                setTimeout(function () {
                    _this.router.navigate(['/']);
                }, 3000);
            }
            else {
                _this.errorMessage = res.message;
            }
        });
    };
    UserPasswordRecoverComponent = __decorate([
        Component({
            selector: 'app-userpasswordrecover',
            templateUrl: './userpasswordrecover.component.html',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [UserService, Router, ActivatedRoute])
    ], UserPasswordRecoverComponent);
    return UserPasswordRecoverComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/user/userpasswordrecover.component.js.map