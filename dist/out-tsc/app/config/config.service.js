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
import { Language } from '../dto/Language';
import { Status } from '../dto/Status';
import { UserType } from '../dto/UserType';
export var ConfigService = (function () {
    function ConfigService() {
        this.url = {
            user: {
                login: "http://localhost:3500/airstudies/services/user/authenticate",
                validateToken: "http://localhost:3500/airstudies/services/user/validatetoken",
                find: "http://localhost:3500/airstudies/services/user/list",
                findById: "http://localhost:3500/airstudies/services/user",
                new: "http://localhost:3500/airstudies/services/user/new",
                update: "http://localhost:3500/airstudies/services/user/update",
                updatePassword: "http://localhost:3500/airstudies/services/user/updatePassword",
                recoverPassword: "http://localhost:3500/airstudies/services/user/recoverpassword",
            },
            school: {
                find: "http://localhost:3500/airstudies/services/school/list",
                findById: "http://localhost:3500/airstudies/services/school",
                new: "http://localhost:3500/airstudies/services/user/school",
                update: "http://localhost:3500/airstudies/services/school/update"
            },
            googleMapURL: "https://maps.googleapis.com/maps/api/geocode/json?address=:my_own_keyword&language=en"
        };
        this.languages = [
            new Language("ALL", "All languages"),
            new Language("1", "English"),
            new Language("2", "Spanish"),
            new Language("3", "French"),
            new Language("4", "German"),
            new Language("5", "Portuguese")
        ];
        this.statusList = [
            new Status("ALL", "All"),
            new Status("1", "Actives only"),
            new Status("0", "Inactives only")
        ];
        this.recoveryMethods = [
            { value: 1, label: "E-mail" },
            { value: 2, label: "SMS" },
            { value: 3, label: "Both" }
        ];
        this.userTypes = [
            new UserType("ALL", "All users"),
            new UserType("ADMIN", "Administrator"),
            new UserType("SCHOOL", "School"),
            new UserType("STUDENT", "Student"),
            new UserType("AGENCY", "Agency"),
            new UserType("HOUSE_OWNER", "House Owner")
        ];
    }
    ConfigService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], ConfigService);
    return ConfigService;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/config/config.service.js.map