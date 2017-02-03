import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import {startWith} from "rxjs/operator/startWith";

@Injectable()
export class GoogleService {

  constructor(private _http: Http) { }

    private googleKey: string = "AIzaSyCqMgE5TlKfNFXeb2przzQvhJR2PAWSex8";
    private headers = new Headers({'Access-Control-Allow-Origin': '*'});

    findPlace = (startsWith: string): Observable<any[]> => {

    let mapsURL = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+startsWith+
        "&types=(cities)&key="+this.googleKey;

    return this._http.get(mapsURL, this.headers)
        .map(h => h.json())
  }

}
