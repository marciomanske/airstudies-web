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
import { Router } from "@angular/router";
import { SchoolSearch } from '../dto/SchoolSearch';
import { SchoolService } from "../services/school/school.service";
import { ConfigService } from "../config/config.service";
export var SchoolSearchComponent = (function () {
    function SchoolSearchComponent(schoolService, config, router) {
        this.schoolService = schoolService;
        this.config = config;
        this.router = router;
        this.school = new SchoolSearch(null, null, null, null, "ALL", "ALL");
        this.schoolStatus = this.config.statusList;
        this.searchResult = [];
        this.schoolToDelete = null;
        this.showNoResultsFound = false;
    }
    SchoolSearchComponent.prototype.ngOnInit = function () {
        this.languages = this.config.languages;
        this.googleMapURL = this.config.url.googleMapURL;
    };
    SchoolSearchComponent.prototype.onPlaceChanged = function (data) {
        this.school.city = null;
        this.school.country = null;
        if (data && data.address_components) {
            var addressComponents = data.address_components;
            for (var index = 0; index < addressComponents.length; index++) {
                var item = addressComponents[index];
                if (item.types.indexOf("locality") >= 0) {
                    this.school.city = item.long_name;
                }
                else if (item.types.indexOf("administrative_area_level_1") >= 0) {
                    this.school.state = item.long_name;
                }
                else if (item.types.indexOf("country") >= 0) {
                    this.school.country = item.long_name;
                }
            }
        }
    };
    SchoolSearchComponent.prototype.onNewRegister = function () {
        this.router.navigate(['/admin/schoolregister/-1']);
    };
    SchoolSearchComponent.prototype.onSearch = function () {
        var _this = this;
        var params = [];
        if (this.school.name) {
            params.push({ value: this.school.name,
                operation: 4,
                attributeName: "name",
                like: true });
        }
        var value = parseInt(this.school.status === "ALL" ? "-1" : this.school.status, 10);
        if (value >= 0) {
            params.push({ value: value,
                operation: 1,
                attributeName: "active",
                like: false });
        }
        if (this.school.city) {
            params.push({ value: this.school.city,
                operation: 4,
                attributeName: "city",
                like: false });
        }
        if (this.school.state) {
            params.push({ value: this.school.state,
                operation: 4,
                attributeName: "state",
                like: false });
        }
        if (this.school.country) {
            params.push({ value: this.school.country,
                operation: 4,
                attributeName: "country",
                like: false });
        }
        this.schoolService.search(params).then(function (res) {
            if (res.status === 1) {
                _this.searchResult = res.result;
                _this.showNoResultsFound = _this.searchResult.length === 0;
            }
        });
    };
    SchoolSearchComponent.prototype.onEdit = function (id) {
        this.router.navigate(["/admin/schoolregister/" + id]);
    };
    SchoolSearchComponent.prototype.onDelete = function (school) {
        this.schoolToDelete = school;
    };
    SchoolSearchComponent.prototype.onConfirmDelete = function () {
        var _this = this;
        if (this.schoolToDelete) {
            var localSchool = this.schoolToDelete;
            this.schoolToDelete = null;
            if (localSchool.active === 0) {
                alert("School is already inactive");
            }
            else {
                localSchool.active = 0;
                this.schoolService.update(localSchool).then(function (res) {
                    if (res.status === 1) {
                        _this.onSearch();
                    }
                    else {
                        alert(res.message);
                    }
                });
            }
        }
    };
    SchoolSearchComponent = __decorate([
        Component({
            selector: 'app-schoolsearch',
            templateUrl: './schoolsearch.component.html',
            styleUrls: ['../customcss/formstyle.css']
        }), 
        __metadata('design:paramtypes', [SchoolService, ConfigService, Router])
    ], SchoolSearchComponent);
    return SchoolSearchComponent;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/school/schoolsearch.component.js.map