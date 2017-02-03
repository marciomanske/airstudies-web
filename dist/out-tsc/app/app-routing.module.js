/**
 * Created by marciomanske on 2017-01-17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuardService } from "./services/authguard/authguard.service";
import { FastSearchComponent } from "./fastsearch/fastsearch.component";
import { UserSearchComponent } from "./user/usersearch.component";
import { UserRegisterComponent } from "./user/userregister.component";
import { UserPasswordRecoverComponent } from './user/userpasswordrecover.component';
import { SchoolSearchComponent } from './school/schoolsearch.component';
import { SchoolRegisterComponent } from './school/school-register.component';
var routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "lostpassword", component: UserPasswordRecoverComponent },
    { path: "main", component: MainComponent },
    { path: "admin", component: AdminComponent, canActivate: [AuthGuardService],
        children: [
            { path: "", component: FastSearchComponent },
            { path: "usersearch", component: UserSearchComponent },
            { path: "userregister/:id", component: UserRegisterComponent },
            { path: "schoolsearch", component: SchoolSearchComponent },
            { path: "schoolregister/:id", component: SchoolRegisterComponent }
        ]
    }
];
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/app-routing.module.js.map