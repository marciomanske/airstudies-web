import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config/config.service";
import {Router} from "@angular/router";
import {ContractService} from "../services/contract/contract.service";
import {ContractSearch} from "../dto/ContractSearch";
import {Contract} from "../dto/Contract";
import {Status} from "../dto/Status";
import {BaseSerchComponent} from "../basecomponent/base-search-component";




@Component({
  selector: 'app-contract-search',
  templateUrl: './contract-search.component.html',
  styleUrls: ['../customcss/formstyle.css']
})

export class ContractSearchComponent  extends BaseSerchComponent implements OnInit{

  constructor(public config: ConfigService, private contractService: ContractService,
              private router: Router){
                  super();
              }

  contractSearch = new ContractSearch (null, null, null, null, null, null,null,null,null);

  contractToDelete = new Contract();
  contractStatus: Status[] = this.config.statusList;


  ngOnInit() {
  }

  onPlaceChanged(data: any) {
        this.contractSearch.city = null;
        this.contractSearch.country = null;
        if (data && data.address_components) {
            let addressComponents = data.address_components;
            for (let index = 0; index < addressComponents.length; index++) {
                let item = addressComponents[index];
                if (item.types.indexOf("locality") >= 0) {
                    this.contractSearch.city = item.long_name;
                  } else if (item.types.indexOf("administrative_area_level_1") >= 0) {
                    this.contractSearch.state = item.long_name;
                  } else if (item.types.indexOf("country") >= 0) {
                    this.contractSearch.country = item.long_name;
                  } 
            }

        }
    }

  onNewRegister() {
            this.router.navigate(['/admin/contractregister/-1']);
        }  

  onEdit(id: number) {
            this.router.navigate(["/admin/contractregister/"+id]);
        }   

  onDelete(contract: Contract) {
    this.contractToDelete = contract;
        }

  getLocation(data: any): string {
      if (data.city != null) {
          return data.city + ", " + data.country;
      }
      return null;
  }

  onSearch() {
            let params = [];
            this.contractSearch.city = null;
            this.contractSearch.state = null;
            this.contractSearch.country = null;


           if (this.contractSearch.ownerName) {
            params.push(
                {value: this.contractSearch.ownerName,
                operation: 4,
                attributeName: "property.ownerName",
                like: true});
           }

           if (this.contractSearch.schoolName) {
            params.push(
                {value: this.contractSearch.schoolName,
                operation: 4,
                attributeName: "school.name",
                like: true});
           }

            let value = parseInt(this.contractSearch.status === "ALL"?"-1":this.contractSearch.status, 10);

            if (value >= 0) {
            params.push(
                {value: value,
                operation: 1,
                attributeName: "active",
                like: false});
            }


            if (this.contractSearch.city) {
            params.push(
                {value: this.contractSearch.city,
                operation: 4,
                attributeName: "localization.city",
                like: false});
            }

            if (this.contractSearch.state) {
            params.push(
                {value: this.contractSearch.state,
                operation: 4,
                attributeName: "localization.state",
                like: false});
            }

            if (this.contractSearch.country) {
            params.push(
                {value: this.contractSearch.country,
                operation: 4,
                attributeName: "localization.country",
                like: false});
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

 onConfirmDelete() {
            if (this.contractToDelete) {
                let localContract = this.contractToDelete;
                this.contractToDelete = null;
                if (localContract.active === 0) {
                    alert("Contract is already inactive");
                   }else {
                    localContract.active = 0;
                    localContract.schoolId = localContract.school.id;
                    localContract.propertyId = localContract.property.id;
                    this.contractService.update(localContract).then(
                        res => {
                            if (res.status === 1) {
                                this.onSearch();
                               }else {
                                 alert(res.message);
                                }
                            })
                    }  
            }
        }   
}

