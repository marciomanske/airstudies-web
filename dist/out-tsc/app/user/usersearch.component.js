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
import { UserSearch } from "../dto/UserSearch";
import { UserService } from "../services/user/user.service";
import { ConfigService } from "../config/config.service";
export var UserSearchComponent = (function () {
    function UserSearchComponent(userService, router, config) {
        this.userService = userService;
        this.router = router;
        this.config = config;
        this.userStatus = this.config.statusList;
        this.userTypes = this.config.userTypes;
        this.showNoResultsFound = false;
        this.user = new UserSearch(null, "ALL", "ALL");
        this.userToDelete = null;
        this.searchResult = [];
    }
    UserSearchComponent.prototype.onNewRegister = function () {
        this.router.navigate(['/admin/userregister/-1']);
    };
    UserSearchComponent.prototype.onSearch = function () {
        var _this = this;
        var params = [];
        if (this.user.name) {
            params.push({ value: this.user.name,
                operation: 4,
                attributeName: "name",
                like: true });
        }
        var value = parseInt(this.user.status === "ALL" ? "-1" : this.user.status, 10);
        if (value >= 0) {
            params.push({ value: value,
                operation: 1,
                attributeName: "active",
                like: false });
        }
        if (this.user.type && this.user.type !== "ALL") {
            params.push({ value: this.user.type,
                operation: 1,
                attributeName: "role",
                like: false });
        }
        this.userService.search(params).then(function (res) {
            if (res.status === 1) {
                _this.searchResult = res.result;
                _this.showNoResultsFound = _this.searchResult.length === 0;
            }
        });
    };
    UserSearchComponent.prototype.onConfirmDelete = function () {
        var _this = this;
        if (this.userToDelete) {
            var localUser = this.userToDelete;
            this.userToDelete = null;
            if (localUser.active === 0) {
                alert("User is already inactive");
            }
            else {
                localUser.active = 0;
                this.userService.update(localUser).then(function (res) {
                    if (res.status === 1) {
                        _this.onSearch();
                    }
                    else {
                        alert(res.message);
                    }
                });
            }
        }
    };
    UserSearchComponent.prototype.onEdit = function (id) {
        this.router.navigate(["/admin/userregister/" + id]);
    };
    UserSearchComponent.prototype.onDelete = function (user) {
        this.userToDelete = user;
    };
    UserSearchComponent = __decorate([
        Component({
            templateUrl: './usersearch.component.html',
            styleUrls: ['../customcss/formstyle.css']
        }), 
        __metadata('design:paramtypes', [UserService, Router, ConfigService])
    ], UserSearchComponent);
    return UserSearchComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/user/usersearch.component.js.map