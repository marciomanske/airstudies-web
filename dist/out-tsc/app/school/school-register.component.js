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
import { Router, ActivatedRoute } from "@angular/router";
import { SchoolService } from "../services/school/school.service";
import { ConfigService } from "../config/config.service";
import { School } from "../dto/School";
import { HelperService } from "../services/helper/helper.service";
export var SchoolRegisterComponent = (function () {
    function SchoolRegisterComponent(schoolService, router, route, config, helper) {
        this.schoolService = schoolService;
        this.router = router;
        this.route = route;
        this.config = config;
        this.helper = helper;
        this.selectedLanguages = [];
        this.languages = this.config.languages.filter(function (language) { return language.value !== "ALL"; });
    }
    //private languages = this.config.languages;
    SchoolRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var schoolId = this.route.snapshot.params['id'];
        if (schoolId > 0) {
            this.schoolService.searchById(schoolId).then(function (res) {
                if (res.status === 1) {
                    _this.school = res.result;
                    if (_this.school.languages != null) {
                        _this.selectedLanguages = JSON.parse(_this.school.languages);
                    }
                }
                else {
                    alert(res.result.message);
                }
            });
        }
        else {
            this.school = new School();
            this.school.registrationDate = new Date().toISOString().slice(0, 10);
        }
    };
    SchoolRegisterComponent.prototype.onSave = function (moveBack) {
        var _this = this;
        var fcn = "new";
        if (this.school.id !== null) {
            fcn = "update";
        }
        this.schoolService[fcn](this.school).then(function (res) {
            if (res.status === 1) {
                _this.clearFields();
                if (moveBack) {
                    _this.router.navigate(['/admin/schoolsearch']);
                }
            }
            else {
                alert(res.message);
            }
        });
    };
    SchoolRegisterComponent.prototype.onSaveAndNew = function () {
        this.onSave(false);
    };
    SchoolRegisterComponent.prototype.onChangeLocalization = function (localization) {
        this.helper.copyLocalization(this.school, localization);
    };
    SchoolRegisterComponent.prototype.clearFields = function () {
        this.school = new School();
        this.school.registrationDate = new Date().toISOString().slice(0, 10);
    };
    SchoolRegisterComponent.prototype.onLanguageClick = function (value) {
        var index = this.selectedLanguages.indexOf(value);
        if (index >= 0) {
            this.selectedLanguages.splice(index, 1);
        }
        else {
            this.selectedLanguages.push(value);
        }
        this.school.languages = JSON.stringify(this.selectedLanguages);
    };
    SchoolRegisterComponent.prototype.getSelected = function (value) {
        return this.selectedLanguages.indexOf(value) >= 0;
    };
    SchoolRegisterComponent = __decorate([
        Component({
            templateUrl: './school-register.component.html',
            styleUrls: ['../customcss/formstyle.css']
        }), 
        __metadata('design:paramtypes', [SchoolService, Router, ActivatedRoute, ConfigService, HelperService])
    ], SchoolRegisterComponent);
    return SchoolRegisterComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/school/school-register.component.js.map