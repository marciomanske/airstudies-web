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
import { User } from "../dto/User";
import { UserService } from "../services/user/user.service";
import { ConfigService } from "../config/config.service";
import { HelperService } from "../services/helper/helper.service";
export var UserRegisterComponent = (function () {
    function UserRegisterComponent(userService, router, route, config, helper) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.config = config;
        this.helper = helper;
        this.userTypes = this.config.userTypes;
        this.recoveryMethods = this.config.recoveryMethods;
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.route.snapshot.params['id'];
        if (userId > 0) {
            this.userService.searchById(userId).then(function (res) {
                if (res.status === 1) {
                    _this.user = res.result;
                }
                else {
                    alert(res.result.message);
                }
            });
        }
        else {
            this.user = new User();
        }
    };
    UserRegisterComponent.prototype.onSave = function (moveBack) {
        var _this = this;
        var fcn = "new";
        if (this.user.id !== null) {
            fcn = "update";
        }
        this.userService[fcn](this.user).then(function (res) {
            if (res.status === 1) {
                _this.clearFields();
                if (moveBack) {
                    _this.router.navigate(['/admin/usersearch']);
                }
            }
            else {
                alert(res.message);
            }
        });
    };
    UserRegisterComponent.prototype.onSaveAndNew = function () {
        this.onSave(false);
    };
    UserRegisterComponent.prototype.onChangeLocalization = function (localization) {
        this.helper.copyLocalization(this.user, localization);
    };
    UserRegisterComponent.prototype.clearFields = function () {
        this.user = new User();
    };
    UserRegisterComponent = __decorate([
        Component({
            templateUrl: './userregister.component.html',
            styleUrls: ['../customcss/formstyle.css']
        }), 
        __metadata('design:paramtypes', [UserService, Router, ActivatedRoute, ConfigService, HelperService])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/user/userregister.component.js.map