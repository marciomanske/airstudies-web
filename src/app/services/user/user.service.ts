import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';

import {BaseHttpService} from "../base/base-http.service";
import {ConfigService} from "../../config/config.service";

@Injectable()
export class UserService extends BaseHttpService {

  constructor(protected http: Http, protected config: ConfigService) {
    super(http, "user", config);
  }

  searchByToken(token: string): Promise<any> {
    let postUrl = this.config.url.user.validateToken;
    return this.executeOther(postUrl, "post", {token: token, isPasswordRecovery: true});

  }

  updatePassword(userId: number, password: string): Promise<any> {
    let putUrl = this.config.url.user.updatePassword;
    return this.executeOther(putUrl, "put", {id: userId, password: password});
  }
}
