import { Component, OnInit } from '@angular/core';
import { Reservation } from '../dto/Reservation';
import {ContractService} from "../services/contract/contract.service";
import {Router, ActivatedRoute} from "@angular/router";
import {ConfigService} from "../config/config.service";
import {RoomType} from "../dto/RoomType";


@Component({
  templateUrl: './contract-reservation.component.html',
  styleUrls: ['../customcss/formstyle.css']
})

export class ContractReservationComponent implements OnInit {

  reservationIdFromModal: number = null;
    
  constructor(private contractService: ContractService, private route: ActivatedRoute, private config: ConfigService,
              private router: Router ) { }

  reservation = new Reservation (null,null,null,null,null);
  registerErrorMessage: string = null;
  propertyTypes = this.config.propertyTypes;
  suite: RoomType = new RoomType("Suites", "SUITE");
  single: RoomType = new RoomType("Singles", "SINGLE");
  shared: RoomType = new RoomType("Shareds", "SHARED");
  roomTypeList = [
        this.suite, this.single, this.shared
    ];

  private selectedRoomTypes = [];  

  initProperty() {
        this.reservation = new Reservation();
        
    }

    

  ngOnInit() {

     this.initProperty();
        let reservationId = 0;
        if (this.reservationIdFromModal === null) {
            reservationId = this.route.snapshot.params['id'];
        } else {
            reservationId = this.reservationIdFromModal;
        }
        this.registerErrorMessage = null;
        if (reservationId > 0) {
            this.contractService.searchById(reservationId).then(
                res => {
                    if (res.status === 1) {
                        this.reservation = res.result;
                        this.selectedRoomTypes = [null, null, null] 
                    if (this.reservation.roomTypes) {
                          this.selectRoomTypes(JSON.parse(this.reservation.roomTypes));
                    }    
                    }    else {
                         this.registerErrorMessage = res.message;
                    }
                    
                });
        } else {
            this.reservation = new Reservation();
        }


  }

  onSave(moveBack: boolean, form: any) {
        this.reservation.roomTypes = JSON.stringify(this.selectedRoomTypes);
        let fcn = "new";
        if (this.reservation.id !== null) {
            fcn = "update";
        }
        this.registerErrorMessage = null;
        this.contractService[fcn](this.reservation).then(
            res => {
                if (res.status === 1) {
                    form.reset();
                    this.clearFields();
                    if (moveBack) {
                        this.router.navigate(['/admin/propertyavailability']);
                    }

                } else {
                    this.registerErrorMessage = res.message;
                }
            });
    }

    
    clearFields() {
        this.reservation = new Reservation();
    }

    onSaveAndNew(form: any) {
        this.onSave(false, form);
    }

    selectRoomTypes(roomTypes: any) {
        for (let roomType of this.roomTypeList) {
            let tempSelected = roomTypes.filter(
                sel => sel.label === roomType.label
            );
            if (tempSelected.length > 0) {
                roomType.amount = tempSelected[0].amount;
                this.selectedRoomTypes.push(roomType);
            }
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
        );
        return tempSelected.length > 0;

    }

    loadData(reservationId: number) {
        this.reservationIdFromModal = reservationId;
        this.ngOnInit();
    }



}

