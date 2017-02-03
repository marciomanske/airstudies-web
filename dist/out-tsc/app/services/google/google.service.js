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
import { Headers, Http } from "@angular/http";
import "rxjs/add/operator/map";
export var GoogleService = (function () {
    function GoogleService(_http) {
        var _this = this;
        this._http = _http;
        this.googleKey = "AIzaSyCqMgE5TlKfNFXeb2przzQvhJR2PAWSex8";
        this.headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        this.findPlace = function (startsWith) {
            var mapsURL = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + startsWith +
                "&types=(cities)&key=" + _this.googleKey;
            return _this._http.get(mapsURL, _this.headers)
                .map(function (h) { return h.json(); });
        };
    }
    GoogleService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], GoogleService);
    return GoogleService;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/services/google/google.service.js.map