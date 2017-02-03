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
import { Language } from "../../dto/Language";
import { ConfigService } from "../../config/config.service";
export var HelperService = (function () {
    function HelperService(config) {
        this.config = config;
        this.languages = config.languages;
    }
    HelperService.prototype.findLanguageByValue = function (value) {
        var result = this.languages.filter(function (language) { return language.value === value; });
        if (result && result.length > 0) {
            return result[0];
        }
        return new Language(null, "");
    };
    HelperService.prototype.copyLocalization = function (entityClass, localization) {
        entityClass.addressLine1 = localization.addressLine1;
        entityClass.addressLine2 = localization.addressLine2;
        entityClass.city = localization.city;
        entityClass.state = localization.state;
        entityClass.country = localization.country;
        entityClass.postalCode = localization.postalCode;
    };
    HelperService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [ConfigService])
    ], HelperService);
    return HelperService;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/services/helper/helper.service.js.map