import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule }     from './app-routing.module';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { UserSearchComponent } from './user/usersearch.component';
import { FastSearchComponent } from './fastsearch/fastsearch.component';
import { SearchButtonsComponent } from './commons/searchbuttons.component';
import { DeleteDialogComponent } from './commons/deletedialog.component';
import { UserRegisterComponent } from './user/userregister.component';
import { RegisterButtonsComponent } from './commons/registerbuttons.component';


import { LoginService } from "./services/login/login.service";
import { AuthGuardService } from "./services/authguard/authguard.service";
import { UserService } from "./services/user/user.service";
import { GoogleService } from "./services/google/google.service";
import { UserPasswordRecoverComponent } from './user/userpasswordrecover.component';
import { SchoolSearchComponent } from './school/schoolsearch.component';
import { LocalizationComponent } from './commons/localization.component';
import {SchoolService} from "./services/school/school.service";
import {ConfigService} from "./config/config.service";
import { SchoolRegisterComponent } from './school/school-register.component';
import {HelperService} from "./services/helper/helper.service";
import { StudentSearchComponent } from './student/student-search.component';
import { StudentRegisterComponent } from './student/student-register.component';
import { PropertySearchComponent } from './property/property-search.component';
import {PropertyRegisterComponent} from './property/property-register.component';
import {StudentService} from './services/student/student.service';
import {PropertyService} from './services/property/property.service';
import {ContractSearchComponent} from './contract/contract-search.component';
import {ContractService} from './services/contract/contract.service';
import { LoginAdminComponent } from './login/login-admin.component';



@NgModule({
  declarations: [
    AppComponent, LoginComponent, MainComponent, MainComponent, AdminComponent,
    UserSearchComponent, FastSearchComponent, SearchButtonsComponent, DeleteDialogComponent, UserRegisterComponent, RegisterButtonsComponent, UserPasswordRecoverComponent,
    SchoolSearchComponent,
    LocalizationComponent,
    SchoolRegisterComponent,
    StudentSearchComponent,
    StudentRegisterComponent,
    PropertySearchComponent,
    PropertyRegisterComponent,
    ContractSearchComponent
    LoginAdminComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AppRoutingModule, Ng2AutoCompleteModule

  ],
  providers: [LoginService, AuthGuardService, UserService, GoogleService,
   SchoolService, ConfigService, HelperService, StudentService, PropertyService, ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
