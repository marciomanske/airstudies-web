var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Location } from '@angular/common';
export var RegisterButtonsComponent = (function () {
    function RegisterButtonsComponent(location) {
        this.location = location;
        this.save = new EventEmitter();
        this.saveAndNew = new EventEmitter();
        this.validForm = true;
    }
    ;
    RegisterButtonsComponent.prototype.onCancel = function () {
        this.location.back();
    };
    RegisterButtonsComponent.prototype.onSave = function () {
        this.save.emit();
    };
    RegisterButtonsComponent.prototype.onSaveAndNew = function () {
        this.saveAndNew.emit();
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], RegisterButtonsComponent.prototype, "save", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], RegisterButtonsComponent.prototype, "saveAndNew", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], RegisterButtonsComponent.prototype, "validForm", void 0);
    RegisterButtonsComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'app-registerbuttons',
            templateUrl: './registerbuttons.component.html',
            styleUrls: ['../customcss/formstyle.css']
        }), 
        __metadata('design:paramtypes', [Location])
    ], RegisterButtonsComponent);
    return RegisterButtonsComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/commons/registerbuttons.component.js.map