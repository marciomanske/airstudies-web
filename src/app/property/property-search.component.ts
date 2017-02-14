import {Component} from '@angular/core';
import {Property} from "../dto/Property";
import {ConfigService} from "../config/config.service";
import {Status} from "../dto/Status";
import {Router} from "@angular/router";
import {PropertyService} from "../services/property/property.service";
import {PropertySearch} from "../dto/PropertySearch";
import {BaseSerchComponent} from "../basecomponent/base-search-component";

@Component({
    selector: 'app-property-search',
    templateUrl: './property-search.component.html',
    styleUrls: ['../customcss/formstyle.css']
})

export class PropertySearchComponent extends BaseSerchComponent {

    propertySearch: PropertySearch = new PropertySearch();
    propertyStatus: Status[] = this.config.statusList;
    propertyToDelete: Property = null;

    constructor(private config: ConfigService, private router: Router,
                private propertyService: PropertyService) {
        super();
    }


    onNewRegister() {
        this.router.navigate(['/admin/propertyregister/-1']);
    }


    onPlaceChanged(data: any) {
        this.propertySearch.city = null;
        this.propertySearch.state = null;
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

    onSearch() {
        this.searchErrorMessage = null;
        let params = [];
        this.propertySearch.city = null;
        this.propertySearch.state = null;
        this.propertySearch.country = null;

        if (this.propertySearch.name) {
            params.push(
                {
                    value: this.propertySearch.name,
                    operation: 4,
                    attributeName: "name",
                    like: true
                });
        }

        let value = parseInt(this.propertySearch.status === "ALL" ? "-1" : this.propertySearch.status, 10);

        if (value >= 0) {
            params.push(
                {
                    value: value,
                    operation: 1,
                    attributeName: "active",
                    like: false
                });
        }

        if (this.propertySearch.city) {
            params.push(
                {
                    value: this.propertySearch.city,
                    operation: 4,
                    attributeName: "localization.city",
                    like: false
                });
        }

        if (this.propertySearch.state) {
            params.push(
                {
                    value: this.propertySearch.state,
                    operation: 4,
                    attributeName: "localization.state",
                    like: false
                });
        }

        if (this.propertySearch.country) {
            params.push(
                {
                    value: this.propertySearch.country,
                    operation: 4,
                    attributeName: "localization.country",
                    like: false
                });
        }

        this.propertyService.search(params).then(
            res => {
                if (res.status === 1) {
                    this.searchResult = res.result;
                    this.showNoResultsFound = this.searchResult.length === 0;
                } else {
                    this.searchErrorMessage = "Error executing search";
                }
            });
    }

    onEdit(id: number) {
        this.router.navigate(["/admin/studentregister/" + id]);
    }

    onDelete(property: Property) {
        this.propertyToDelete = property;
    }

    onConfirmDelete() {
        if (this.propertyToDelete) {
            this.searchErrorMessage = null;
            let localProperty = this.propertyToDelete;
            this.propertyToDelete = null;
            if (localProperty.active === 0) {
                this.searchErrorMessage = "Property is already inactive";
            } else {
                localProperty.active = 0;
                this.propertyService.update(localProperty).then(
                    res => {
                        if (res.status === 1) {
                            this.onSearch();
                        } else {
                            this.searchErrorMessage = res.message;
                        }
                    })
            }
        }
    }


}
