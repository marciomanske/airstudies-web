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
import { UserSearch } from "../dto/UserSearch";
export var UserSearchComponent = (function () {
    function UserSearchComponent() {
        this.userStatus = [
            { value: "-1", label: "All users" },
            { value: "1", label: "Actives only" },
            { value: "0", label: "Inactives only" }
        ];
        this.userTypes = [
            { value: "ALL", label: "All" },
            { value: "ADMIN", label: "Administrator" },
            { value: "SCHOOL", label: "School" }
        ];
        this.user = new UserSearch(null, "-1", "ALL");
    }
    UserSearchComponent.prototype.searchClick = function () {
        alert(JSON.stringify(this.user));
    };
    UserSearchComponent = __decorate([
        Component({
            moduleId: module.id,
            templateUrl: './usersearch.component.html',
            styleUrls: ['../customcss/formstyle.css']
        }), 
        __metadata('design:paramtypes', [])
    ], UserSearchComponent);
    return UserSearchComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/services/user/usersearch.component.js.map