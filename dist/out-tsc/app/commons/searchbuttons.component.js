var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
export var SearchButtonsComponent = (function () {
    function SearchButtonsComponent() {
        this.search = new EventEmitter();
        this.newRegister = new EventEmitter();
    }
    SearchButtonsComponent.prototype.onSearch = function () {
        this.search.emit();
    };
    SearchButtonsComponent.prototype.onNewRegister = function () {
        this.newRegister.emit();
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], SearchButtonsComponent.prototype, "search", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], SearchButtonsComponent.prototype, "newRegister", void 0);
    SearchButtonsComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'app-searchbuttons',
            templateUrl: './searchbuttons.component.html',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [])
    ], SearchButtonsComponent);
    return SearchButtonsComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/commons/searchbuttons.component.js.map