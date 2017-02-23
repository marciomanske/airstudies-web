import {Component, OnInit} from '@angular/core';
import {BaseSerchComponent} from "../basecomponent/base-search-component";
import {ConfigService} from "../config/config.service";
import {ContractSearch} from "../dto/ContractSearch";
import {ContractService} from "../services/contract/contract.service";

@Component({
    styleUrls: ['../customcss/formstyle.css'],
    templateUrl: './property-availability.component.html'
})
export class PropertyAvailabilityComponent extends BaseSerchComponent implements OnInit {

    contractSearch: ContractSearch = new ContractSearch();

    searchResult = null;

    availability = null;
    propertyId: number = 0;

    selectedContract: any = null;

    composeAddress(data: any): string {

        let result: string = null;

        if (data.city !== null) {
            result =
                (data.addressLine1 !== null ? data.addressLine1 + ", " : "") +
                (data.addressLine2 !== null ? data.addressLine2 + ", " : "") +
                data.city + ", " + data.state + ", " + data.country;
        }

        return result;

    }

    constructor(public config: ConfigService, private contractService: ContractService) {
        super();
    }

    onRowClick(data: any) {
        this.selectedContract = data;
        this.availability = [];

        this.availability.push(
            {
                student: "Márcio Manske",
                age: 38,
                school: "ILAC",
                country: "Brazil",
                checkin: "2017-05-01",
                checkout: "2017-08-04"
            }
        );
    }

    onViewClick(data: any) {
        this.propertyId = data.propertyId;
    }

    ngOnInit() {
    }

    onPlaceChanged(data: any) {
        this.contractSearch.city = null;
        this.contractSearch.state = null;
        this.contractSearch.country = null;
        this.contractSearch.addressLine1 = null;
        this.contractSearch.addressLine2 = null;
        if (data && data.address_components) {
            let addressComponents = data.address_components;
            for (let index = 0; index < addressComponents.length; index++) {
                let item = addressComponents[index];
                if (item.types.indexOf("locality") >= 0) {
                    this.contractSearch.city = item.long_name;
                } else if (item.types.indexOf("administrative_area_level_1") >= 0) {
                    this.contractSearch.state = item.short_name;
                } else if (item.types.indexOf("country") >= 0) {
                    this.contractSearch.country = item.long_name;
                } else if (item.types.indexOf("route") >= 0) {
                    this.contractSearch.addressLine1 = item.long_name;
                }  else if (item.types.indexOf("sublocality") >= 0) {
                    this.contractSearch.addressLine2 = item.long_name;
                }
            }

        }
    }

    onSearch() {
        this.searchErrorMessage = null;
        let params = [];


        if (this.contractSearch.ownerName) {
            params.push(
                {
                    value: this.contractSearch.ownerName,
                    operation: 4,
                    attributeName: "property.ownerName",
                    like: true
                });
        }
        if (this.contractSearch.school) {
            params.push(
                {
                    value: this.contractSearch.school,
                    operation: 4,
                    attributeName: "school.name",
                    like: true
                });
        }

        let value = parseInt(this.contractSearch.status === "ALL" ? "-1" : this.contractSearch.status, 10);

        if (value >= 0) {
            params.push(
                {
                    value: value,
                    operation: 1,
                    attributeName: "active",
                    like: false
                });
        }

        if (this.contractSearch.city) {
            params.push(
                {
                    value: this.contractSearch.city,
                    operation: 4,
                    attributeName: "property.localization.city",
                    like: false
                });
        }

        if (this.contractSearch.state) {
            params.push(
                {
                    value: this.contractSearch.state,
                    operation: 4,
                    attributeName: "property.localization.state",
                    like: false
                });
        }

        if (this.contractSearch.country) {
            params.push(
                {
                    value: this.contractSearch.country,
                    operation: 4,
                    attributeName: "property.localization.country",
                    like: false
                });
        }

        if (this.contractSearch.addressLine1) {
            params.push(
                {
                    value: this.contractSearch.addressLine1,
                    operation: 1,
                    attributeName: "property.localization.addressLine1",
                    like: true
                });
        }
        if (this.contractSearch.addressLine2) {
            params.push(
                {
                    value: this.contractSearch.addressLine2,
                    operation: 1,
                    attributeName: "property.localization.addressLine2",
                    like: true
                });
        }

        this.contractService.search(params).then(
            res => {
                if (res.status === 1) {
                    this.searchResult = res.result;
                    this.showNoResultsFound = this.searchResult.length === 0;
                } else {
                    this.searchErrorMessage = "Error executing search";
                }
            });
    }

}
