import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config/config.service";
import {Contract} from "../dto/Contract";
import {ContractService} from "../services/contract/contract.service";
import {SchoolService} from "../services/school/school.service";
import {Router, ActivatedRoute} from "@angular/router";
import {HelperService} from "../services/helper/helper.service";


@Component({
  selector: 'app-contract-register',
  templateUrl: './contract-register.component.html',
  styleUrls: ['../customcss/formstyle.css']
})
export class ContractRegisterComponent implements OnInit {

  constructor(private schoolService: SchoolService, private config: ConfigService,private contractService: ContractService, 
              private router: Router,private route: ActivatedRoute, private helper: HelperService) { }
  

  contract: Contract = new Contract();

  urlSchoolByName: string = this.config.url.baseAddress +
    this.config.url.school.findByName;
    
  urlPropertyByName: string = this.config.url.baseAddress +
    this.config.url.property.findByName;

  
  registerErrorMessage: string = null;

  schoolName: string;
  propertyOwnerName: string;
  
  public single: number;
  public shared: number;
  public suite: number;
  public meal: number;
  public facilities: number;
  
  
  ngOnInit() {  
    this.schoolName = null;
    this.propertyOwnerName = null;
    this.single = null;
    this.shared = null;
    this.suite = null;
    this.meal = null;
    this.facilities = null;

    let contractId = this.route.snapshot.params['id'];
        this.registerErrorMessage = null;
        if (contractId > 0) {
            this.contractService.searchById(contractId).then(
                res => {
                    if (res.status === 1) {
                        this.contract = res.result;
                        this.schoolName = this.contract.school.name;
                        this.propertyOwnerName = this.contract.property.ownerName;
                        this.contract.schoolId = this.contract.school.id;
                        this.contract.propertyId = this.contract.property.id;
                        if (this.contract.values !== null) {
                          let values = JSON.parse(this.contract.values);
                          this.single = values.single;
                          this.shared = values.shared;
                          this.suite = values.suite;
                          this.meal = values.meal;
                          this.facilities = values.facilities;
                        }
                    } else {
                        this.registerErrorMessage = res.message;
                    }
                });
        } else {
            this.contract = new Contract();
            this.contract.startDate = new Date().toISOString().slice(0,10);
        }
  }


  onSchoolChanged(data: any) {

    this.contract.schoolId = null;
    if (data != null) {
      this.contract.schoolId = data.id;
      
    }

  }

  onPropertyChanged(data: any) {

    this.contract.propertyId = null;
    if (data != null) {
      this.contract.propertyId = data.id;
      
    }

  }

  onSave(moveBack: boolean, form: any) {
    let fcn = "new";
    if (this.contract.id !== null) {
      fcn = "update";
    }
                          
    let values = {
      single: this.single,
      shared: this.shared,
      suite: this.suite,
      meal: this.meal,
      facilities: this.facilities
    }

    this.contract.values = JSON.stringify(values);

    this.contractService[fcn](this.contract).then(
      res => {
        if (res.status === 1) {
          this.clearFields();
          form.reset();
          if (moveBack) {
            this.router.navigate(['/admin/contractsearch']);
          }

        } else {
            this.registerErrorMessage = res.message;
        }
      }
    );
    
  } 

  onSaveAndNew(form: any) {
        this.onSave(false, form);
    }

  clearFields() {
    this.contract = new Contract();
   this.contract.startDate = new Date().toISOString().slice(0,10);
  }
}
