/**
 * Created by marciomanske on 2017-01-17.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./main/main.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuardService } from "./services/authguard/authguard.service";
import { FastSearchComponent } from "./fastsearch/fastsearch.component";
import { UserSearchComponent } from "./user/usersearch.component";
import { UserRegisterComponent } from "./user/userregister.component";
import { UserPasswordRecoverComponent } from './user/userpasswordrecover.component';
import { SchoolSearchComponent } from './school/schoolsearch.component';
import { SchoolRegisterComponent } from './school/school-register.component';

const routes: Routes = [
    {path:"", redirectTo: "/main", pathMatch: "full"},
    {path: "lostpassword", component: UserPasswordRecoverComponent},
    {path:"main", component: MainComponent},
    {path:"admin", component: AdminComponent, canActivate: [AuthGuardService],
        children: [
            {path:"", component: FastSearchComponent},
            {path:"usersearch", component: UserSearchComponent},
            {path: "userregister/:id", component: UserRegisterComponent},
            {path: "schoolsearch", component: SchoolSearchComponent},
            {path: "schoolregister/:id", component: SchoolRegisterComponent}
        ]

    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
