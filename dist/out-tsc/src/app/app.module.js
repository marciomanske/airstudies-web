var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { UserSearchComponent } from './user/usersearch.component';
import { FastSearchComponent } from './fastsearch/fastsearch.component';
import { SearchButtonsComponent } from './commons/searchbuttons.component';
import { LoginService } from "./services/login/login.service";
import { AuthGuardService } from "./services/authguard/authguard.service";
import { UserService } from "./services/user/user.service";
import { DeleteDialogComponent } from './commons/deletedialog.component';
import { UserRegisterComponent } from './user/userregister.component';
import { RegisterButtonsComponent } from './commons/registerbuttons.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent, LoginComponent, CarouselComponent, CarouselComponent, MainComponent, MainComponent, AdminComponent,
                UserSearchComponent, FastSearchComponent, SearchButtonsComponent, DeleteDialogComponent, UserRegisterComponent, RegisterButtonsComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule, AppRoutingModule, GooglePlaceModule
            ],
            providers: [LoginService, AuthGuardService, UserService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/src/app/app.module.js.map