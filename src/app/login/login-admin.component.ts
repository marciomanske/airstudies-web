import { Component  } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from "../services/login/login.service";
import { LoginResult } from "../dto/LoginResult";

@Component({
  selector: 'app-content',
  templateUrl: './login-admin.component.html',
  styleUrls: []
})
export class LoginAdminComponent  {

  emailRecover: string = null;
  errorMessage: string = null;
  showError: boolean = false;

  recoverErrorMessage: string = null;
  recoverMessage: string = null;


  constructor(private router: Router, private loginService: LoginService ) {}


  signinClick(username, password) {

    this.loginService.login({username: username, password: password, companyCode: "ADMIN"}).then(

        res => { if (res.status === 1) {

          if (res.user.role !== "ADMIN") {
            this.loginFail(new LoginResult(2, null, "Access Forbidden", null));
            return;
          }

          this.loginSuccess(res);
        } else {
          this.loginFail(res);
        }

        }
    );
  }

  loginSuccess(result: LoginResult) {
    this.router.navigate(['/admin']);
  }

  loginFail(result: LoginResult) {
    this.errorMessage = result.message;
    this.showError = true;
    let that = this;
    setTimeout(function() {
      that.showError = false;
    }, 5000);
  }

  recoverPassord(email: string) {
    this.recoverMessage = null;
    this.recoverErrorMessage = null;
    if (email === null && email.trim() === "") {
      this.recoverErrorMessage = "Email cannot be empty!";
      return;
    }
    this.loginService.recoverPassword(email).then(

        res => {

          if (res.status && res.status === 1) {
            this.recoverMessage = "Email sent";
          } else {
            this.recoverErrorMessage = res.message;
          }
          setTimeout(() => {
            this.emailRecover = null;
            this.recoverMessage = null;
            this.recoverErrorMessage = null;
          }, 3000);
        }
    );
  }

}
