/**
 * Created by marciomanske on 2017-01-31.
 */
import { Language } from "./Language";
export var Helper = (function () {
    function Helper(config) {
        this.config = config;
        this.languages = config.languages;
    }
    Helper.prototype.findLanguageByValue = function (value) {
        var result = this.languages.filter(function (language) { return language.value === value; });
        if (result && result.length > 0) {
            return result[0];
        }
        return new Language(null, "");
    };
    return Helper;
}());
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/dto/Helper.js.map