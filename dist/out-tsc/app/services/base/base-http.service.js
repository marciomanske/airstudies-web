import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
export var BaseHttpService = (function () {
    function BaseHttpService(http, entityName, config) {
        this.http = http;
        this.entityName = entityName;
        this.config = config;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    BaseHttpService.prototype.executeGet = function (url) {
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return { status: 2, error: error };
        });
    };
    BaseHttpService.prototype.executeOther = function (url, method, body) {
        if (method === "post") {
            return this.http.post(url, body, { headers: this.headers })
                .toPromise()
                .then(function (res) {
                return res.json();
            })
                .catch(function (error) {
                return { status: 2, error: error };
            });
        }
        else {
            return this.http.put(url, body, { headers: this.headers })
                .toPromise()
                .then(function (res) {
                return res.json();
            })
                .catch(function (error) {
                return { status: 2, error: error };
            });
        }
    };
    BaseHttpService.prototype.search = function (criteria) {
        var getUrl = this.config.url[this.entityName].find + "/" + JSON.stringify(criteria);
        return this.executeGet(getUrl);
    };
    BaseHttpService.prototype.searchById = function (id) {
        var getUrl = this.config.url[this.entityName].findById + "/" + id;
        return this.executeGet(getUrl);
    };
    BaseHttpService.prototype.new = function (entity) {
        var postUrl = this.config.url[this.entityName].new;
        return this.executeOther(postUrl, "post", entity);
    };
    BaseHttpService.prototype.update = function (entity) {
        var putUrl = this.config.url[this.entityName].update;
        return this.executeOther(putUrl, "put", entity);
    };
    return BaseHttpService;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/services/base/base-http.service.js.map