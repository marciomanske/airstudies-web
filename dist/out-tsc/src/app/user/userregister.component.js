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
import { UserType } from "../dto/UserType";
export var UserRegisterComponent = (function () {
    function UserRegisterComponent() {
        this.userTypes = UserType.getTypes();
        this.address = "";
        this.user = { passport: null, fullName: null, email: null, username: null, type: null, address: { city: null, state: null, country: null } };
        this.options = { types: [], componentRestrictions: {} };
    }
    UserRegisterComponent.prototype.getAddress = function (place) {
        console.log("Address", place);
    };
    UserRegisterComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'app-userregister',
            templateUrl: './userregister.component.html',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/src/app/user/userregister.component.js.map