import { Injectable } from '@angular/core';
import {  Http  }    from '@angular/http';
import {BaseHttpService} from "../base/base-http.service";
import {ConfigService} from "../../config/config.service";
import {Reservation} from "../../dto/Reservation";


@Injectable()
export class ReservationService extends BaseHttpService {

  constructor( protected http: Http, protected config: ConfigService)  {
      super(http, "reservation", config); 
  }
  
}
