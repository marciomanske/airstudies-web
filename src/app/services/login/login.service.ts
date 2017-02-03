import { Injectable } from '@angular/core';
import { Headers, Http }    from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { tokenNotExpired } from 'angular2-jwt';

import { LoginResult } from "../../dto/LoginResult";
import {ConfigService} from "../../config/config.service";
import {BaseHttpService} from "../base/base-http.service";



@Injectable()
export class LoginService extends BaseHttpService {

  constructor(protected http: Http, protected config: ConfigService) {
    super(http, "user", config);
  }

  login(data): Promise<LoginResult> {
    return this.http.post(this.config.url.user.login, data, {headers: this.headers})
        .toPromise()
        .then(function(res) {

            const result: LoginResult = res.json();
            localStorage.setItem("token", result.token);
            localStorage.setItem("user", JSON.stringify(result.user));

            return result;
        })
        .catch(function(error) {
            console.log(error);
            return new LoginResult(2, null, "Error processing login", null);
        });
  }

  recoverPassword(email: string): Promise<any> {

    let postUrl = this.config.url.user.recoverPassword + "/" + email;
    return this.executeOther(postUrl, "post", {});
  }

  loggedIn(): boolean {
        return tokenNotExpired("token");
  }

  logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
  }

  getUserData(): LoginResult {
      let user = JSON.parse(localStorage.getItem("user"));
      let token = localStorage.getItem("token");
      return new LoginResult(0, token, null, user);
  }

}
