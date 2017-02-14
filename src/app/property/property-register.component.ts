import {Component, OnInit} from '@angular/core';
import {Property} from "../dto/Property";
import {ConfigService} from "../config/config.service";
import {Localization} from "../dto/Localization";
import {HelperService} from "../services/helper/helper.service";
import {PropertyService} from "../services/property/property.service";
import {RoomType} from "../dto/RoomType";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './property-register.component.html',
    styleUrls: ['../customcss/formstyle.css']
})
export class PropertyRegisterComponent implements OnInit {

    constructor(private helper: HelperService, private config: ConfigService,
                private router: Router, private propertyService: PropertyService, private route: ActivatedRoute) {
    }

    private property = new Property();
    registerErrorMessage: string = null;


    propertyTypes = this.config.propertyTypes;


    suite: RoomType = new RoomType("Suites", "SUITE");
    single: RoomType = new RoomType("Singles", "SINGLE");
    shared: RoomType = new RoomType("Shareds", "SHARED");
    roomTypeList = [
        this.suite, this.single, this.shared
    ];

    private selectedRoomTypes = [];
    private selectedTransportation = [];
    private selectedFacilities = [];
    private selectedAllowences = [];

    selectRoomTypes(roomTypes: any) {
        for (let roomType of this.roomTypeList) {
            let tempSelected = roomTypes.filter(
                sel => sel.label === roomType.label
            )
            if (tempSelected.length > 0) {
                roomType.amount = tempSelected[0].amount;
                this.selectedRoomTypes.push(roomType);
            }
        }
    }


    ngOnInit() {

        let propertyId = this.route.snapshot.params['id'];

        if (propertyId > 0) {
            this.propertyService.searchById(propertyId).then(
                res => {
                    if (res.status === 1) {
                        this.property = res.result;
                        this.selectedRoomTypes = [];
                        if (this.property.roomTypes) {

                            this.selectRoomTypes(JSON.parse(this.property.roomTypes));
                        }
                        this.selectedTransportation = [];
                        if (this.property.transportation) {
                            this.selectedTransportation = JSON.parse(this.property.transportation);
                        }
                        this.selectedFacilities = [];
                        if (this.property.facilities) {
                            this.selectedFacilities = JSON.parse(this.property.facilities);
                        }
                        this.selectedAllowences = [];
                        if (this.property.allowence) {
                            this.selectedAllowences = JSON.parse(this.property.allowence);
                        }
                    }
                    else {
                        this.registerErrorMessage = res.result.message;
                    }
                }
            );

        } else {
            this.property = new Property();
        }

    }

    onPlaceChanged(data: any) {
        this.property.city = null;
        this.property.country = null;
        if (data && data.address_components) {
            let addressComponents = data.address_components;
            for (let index = 0; index < addressComponents.length; index++) {
                let item = addressComponents[index];
                if (item.types.indexOf("locality") >= 0) {
                    this.property.city = item.long_name;
                } else if (item.types.indexOf("administrative_area_level_1") >= 0) {
                    this.property.state = item.long_name;
                } else if (item.types.indexOf("country") >= 0) {
                    this.property.country = item.long_name;
                }
            }

        }
    }

    onOwnerPlaceChanged(data: any) {
        this.property.ownerCountry = null;
        if (data && data.address_components) {
            let addressComponents = data.address_components;
            for (let index = 0; index < addressComponents.length; index++) {
                let item = addressComponents[index];
                if (item.types.indexOf("country") >= 0) {
                    this.property.ownerCountry = item.long_name;
                    break;
                }
            }

        }
    }


    onChangeLocalization(localization: Localization) {
        this.helper.copyLocalization(this.property, localization);
    }


    onLanguageChange(data: any) {
        this.property.ownerMotherTongue = null;
        if (data) {
            this.property.ownerMotherTongue = data.name;
        }
    }

    onRoomTypeClick(roomType: RoomType) {

        let index = this.selectedRoomTypes.indexOf(roomType);
        if (index >= 0) {
            this.selectedRoomTypes.splice(index, 1);
            roomType.amount = null;
        } else {
            this.selectedRoomTypes.push(roomType);
        }

    }

    isRoomTypeChecked(roomType: RoomType): boolean {

        let tempSelected = this.selectedRoomTypes.filter(
            sel => sel.label === roomType.label
        )
        return tempSelected.length > 0;

    }

    getSelected(value: string, selectedList: any): boolean {
        return selectedList.indexOf(value) >= 0;
    }

    onCheckBoxClick(value: string, selectedList: any, attributeName: string) {
        let index = selectedList.indexOf(value);
        if (index >= 0) {
            selectedList.splice(index, 1);
        } else {
            selectedList.push(value);
        }

        this.property[attributeName] = JSON.stringify(selectedList);


    }

    onSave(moveBack: boolean, form: any) {
        this.property.roomTypes = JSON.stringify(this.selectedRoomTypes);
        let fcn = "new";
        if (this.property.id !== null) {
            fcn = "update";
        }
        this.propertyService[fcn](this.property).then(
            res => {
                if (res.status === 1) {
                    form.reset();
                    this.clearFields();
                    if (moveBack) {
                        this.router.navigate(['/admin/propertysearch']);
                    }

                } else {
                    this.registerErrorMessage = res.message;
                }
            });
    }

    clearFields() {
        this.property = new Property();
    }

    onSaveAndNew(form: any) {
        this.onSave(false, form);
    }


}
