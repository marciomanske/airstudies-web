import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from "../services/login/login.service";

@Component({
  moduleId: module.id,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ["admin.component.css"]
})
export class AdminComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  userData = this.loginService.getUserData();


  logoutClick() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

}
