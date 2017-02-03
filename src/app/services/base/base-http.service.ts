import { Injectable } from '@angular/core';

import { Headers, Http }    from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ConfigService} from "../../config/config.service";
import {Observable} from "rxjs";

export class BaseHttpService {

  protected headers = new Headers({'Content-Type': 'application/json'});

  constructor(protected http: Http, protected entityName: string, protected config: ConfigService) { }

  executeGet(url: string): Promise<any> {
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(function(res) {
        return res.json();
      })
      .catch(function(error) {
        return {status: 2, error: error};
      });
  }
  executeOther(url: string, method: string, body: any): Promise<any> {
    if (method === "post") {
      return this.http.post(url,body, {headers: this.headers})
        .toPromise()
        .then(function(res) {
          return res.json();
        })
        .catch(function(error) {
          return {status: 2, error: error};
        });
    } else {
      return this.http.put(url,body, {headers: this.headers})
        .toPromise()
        .then(function(res) {
          return res.json();
        })
        .catch(function(error) {
          return {status: 2, error: error};
        });
    }
  }

  search(criteria: any): Promise<any> {
    let getUrl = this.config.url[this.entityName].find + "/" + JSON.stringify(criteria);
    return this.executeGet(getUrl);
  }

  searchById(id: number):Promise<any> {
    let getUrl = this.config.url[this.entityName].findById + "/" + id;
    return this.executeGet(getUrl);
  }

  new(entity: any) : Promise<any> {
    let postUrl = this.config.url[this.entityName].new;
    return this.executeOther(postUrl, "post", entity);
  }

  update(entity: any) : Promise<any> {
    let putUrl = this.config.url[this.entityName].update;
    return this.executeOther(putUrl, "put", entity);
  }
}
