import { Component, Input, Output, EventEmitter } from '@angular/core';

import {Localization} from "../dto/Localization";
import {ConfigService} from "../config/config.service";


@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: []
})
export class LocalizationComponent {

  constructor (private config: ConfigService) {}


  @Input() addressLine1: string = null;
  @Input() addressLine2: string = null;
  @Input() city: string = null;
  @Input() state: string = null;
  @Input() country: string = null;
  @Input() postalCode: string = null;
  @Input() disableFields: boolean = false;

  @Output() localization: EventEmitter <Localization> =
    new EventEmitter();

  googleMapURL: string = this.config.url.googleMapURL;

  onCityChanged(data: any) {
    this.city = null;
    this.state = null;
    this.country = null;
    if (data && data.address_components) {
      let addressComponents = data.address_components;
      for (let index = 0; index < addressComponents.length; index++) {
        let item = addressComponents[index];
        if (item.types.indexOf("locality") >= 0) {
          this.city = item.long_name;
        } else if (item.types.indexOf("administrative_area_level_1") >= 0) {
          this.state = item.short_name;
        } else if (item.types.indexOf("country") >= 0) {
          this.country = item.long_name;
        }
      }

    }
    this.localization.emit(new Localization(this.addressLine1, this.addressLine2, this.city, this.state,
      this.country, this.postalCode));
  }

  onChangeValues() {
    this.localization.emit(new Localization(this.addressLine1, this.addressLine2, this.city, this.state,
    this.country, this.postalCode));
  }

}
