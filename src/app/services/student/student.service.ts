import { Injectable } from '@angular/core';
import {BaseHttpService} from "../base/base-http.service";
import {  Http }    from '@angular/http';
import {ConfigService} from "../../config/config.service";
import {Student} from "../../dto/Student";

@Injectable()
export class StudentService extends BaseHttpService {

  constructor(protected http: Http, protected config: ConfigService) { 
    super (http, "student", config);
  }

}
