import { Injectable } from '@angular/core';
import {  Http }    from '@angular/http';
import {BaseHttpService} from "../base/base-http.service";
import {ConfigService} from "../../config/config.service";

@Injectable()
export class SchoolService extends BaseHttpService {

  constructor(protected http: Http, protected config: ConfigService) {
    super(http, "school", config);
  }

}
