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
export var DeleteDialogComponent = (function () {
    function DeleteDialogComponent() {
        this.confirmDelete = new EventEmitter();
    }
    DeleteDialogComponent.prototype.onConfirmDelete = function () {
        this.confirmDelete.emit();
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], DeleteDialogComponent.prototype, "confirmDelete", void 0);
    DeleteDialogComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'app-deletedialog',
            templateUrl: './deletedialog.component.html',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/commons/deletedialog.component.js.map