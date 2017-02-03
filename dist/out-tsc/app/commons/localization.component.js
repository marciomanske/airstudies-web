var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Localization } from "../dto/Localization";
import { ConfigService } from "../config/config.service";
export var LocalizationComponent = (function () {
    function LocalizationComponent(config) {
        this.config = config;
        this.addressLine1 = null;
        this.addressLine2 = null;
        this.city = null;
        this.state = null;
        this.country = null;
        this.postalCode = null;
        this.localization = new EventEmitter();
        this.googleMapURL = this.config.url.googleMapURL;
    }
    LocalizationComponent.prototype.onCityChanged = function (data) {
        this.city = null;
        this.state = null;
        this.country = null;
        if (data && data.address_components) {
            var addressComponents = data.address_components;
            for (var index = 0; index < addressComponents.length; index++) {
                var item = addressComponents[index];
                if (item.types.indexOf("locality") >= 0) {
                    this.city = item.long_name;
                }
                else if (item.types.indexOf("administrative_area_level_1") >= 0) {
                    this.state = item.long_name;
                }
                else if (item.types.indexOf("country") >= 0) {
                    this.country = item.long_name;
                }
            }
        }
        this.localization.emit(new Localization(this.addressLine1, this.addressLine2, this.city, this.state, this.country, this.postalCode));
    };
    LocalizationComponent.prototype.onChangeValues = function () {
        this.localization.emit(new Localization(this.addressLine1, this.addressLine2, this.city, this.state, this.country, this.postalCode));
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LocalizationComponent.prototype, "addressLine1", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LocalizationComponent.prototype, "addressLine2", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LocalizationComponent.prototype, "city", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LocalizationComponent.prototype, "state", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LocalizationComponent.prototype, "country", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LocalizationComponent.prototype, "postalCode", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], LocalizationComponent.prototype, "localization", void 0);
    LocalizationComponent = __decorate([
        Component({
            selector: 'app-localization',
            templateUrl: './localization.component.html',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [ConfigService])
    ], LocalizationComponent);
    return LocalizationComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/commons/localization.component.js.map