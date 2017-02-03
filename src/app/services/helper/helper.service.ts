import { Injectable } from '@angular/core';
import {Language} from "../../dto/Language";
import {ConfigService} from "../../config/config.service";
import {Localization} from "../../dto/Localization";

@Injectable()
export class HelperService {

  private languages: Language[];

  constructor(private config: ConfigService) {
    this.languages = config.languages;
  }


  findLanguageByValue(value: string): Language {
    let result = this.languages.filter(
      language => language.value === value
    );
    if (result && result.length > 0) {
      return result[0];
    }
    return new Language(null, "");
  }


  copyLocalization(entityClass: any, localization: Localization) {
    entityClass.addressLine1 = localization.addressLine1;
    entityClass.addressLine2 = localization.addressLine2;
    entityClass.city = localization.city;
    entityClass.state = localization.state;
    entityClass.country = localization.country;
    entityClass.postalCode = localization.postalCode;

  }

}
