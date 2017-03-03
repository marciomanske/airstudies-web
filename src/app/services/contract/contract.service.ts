import { Injectable } from '@angular/core';
import {BaseHttpService} from "../base/base-http.service";
import {  Http }    from '@angular/http';
import {ConfigService} from "../../config/config.service";


@Injectable()
export class ContractService extends BaseHttpService {

  constructor(protected http: Http, protected config: ConfigService) { 
    super (http, "contract", config);
  }




}
