import { Component, OnInit } from '@angular/core';
import {Property} from "../dto/Property";
import {ConfigService} from "../config/config.service";
import {Localization} from "../dto/Localization";
import {HelperService} from "../services/helper/helper.service";
import {PropertySearch} from "../dto/PropertySearch";


@Component({
  templateUrl: './property-register.component.html',
  styleUrls: ['../customcss/formstyle.css']
})
export class PropertyRegisterComponent implements OnInit {
  
  constructor(private helper: HelperService, private config: ConfigService) { }

  private Property = new Property ();
  propertySearch: PropertySearch = new PropertySearch(null, null, null, null, null);

  ngOnInit() {
    this.Property = new Property();
  }
  
  onPlaceChanged(data: any) {
        this.propertySearch.city = null;
        this.propertySearch.country = null;
        if (data && data.address_components) {
            let addressComponents = data.address_components;
            for (let index = 0; index < addressComponents.length; index++) {
                let item = addressComponents[index];
                if (item.types.indexOf("locality") >= 0) {
                    this.propertySearch.city = item.long_name;
                } else if (item.types.indexOf("administrative_area_level_1") >= 0) {
                    this.propertySearch.state = item.long_name;
                } else if (item.types.indexOf("country") >= 0) {
                    this.propertySearch.country = item.long_name;
                }
            }

        }
    }


  onChangeLocalization(localization: Localization) {
        this.helper.copyLocalization(this.Property, localization);
    }


}
