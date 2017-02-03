import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import {SchoolService} from "../services/school/school.service";
import {ConfigService} from "../config/config.service";
import {School} from "../dto/School";
import {Localization} from "../dto/Localization";
import {HelperService} from "../services/helper/helper.service";


@Component({
  templateUrl: './school-register.component.html',
  styleUrls: ['../customcss/formstyle.css']

})
export class SchoolRegisterComponent implements OnInit {

  constructor(private schoolService: SchoolService, private router: Router, private route: ActivatedRoute,
              private config: ConfigService, private helper: HelperService) { }

  private school: School = new School();

  private selectedLanguages = [];


  private languages = this.config.languages.filter(
    language => language.value !== "ALL"
  );


  //private languages = this.config.languages;
  ngOnInit() {
    let schoolId = this.route.snapshot.params['id'];

    if (schoolId > 0) {
      this.schoolService.searchById(schoolId).then(
        res => {
          if (res.status === 1) {
            this.school = res.result;
            if (this.school.languages != null) {
              this.selectedLanguages = JSON.parse(this.school.languages);
            }
          } else {
            alert(res.result.message);
          }
        }
      );
    } else {
      this.school = new School();
      this.school.registrationDate = new Date().toISOString().slice(0,10);
    }

  }

  onSave(moveBack: boolean) {

    let fcn = "new";
    if (this.school.id !== null) {
      fcn = "update";
    }


    this.schoolService[fcn](this.school).then(
      res => {
        if (res.status === 1) {
          this.clearFields();
          if (moveBack) {
            this.router.navigate(['/admin/schoolsearch']);
          }

        } else {
          alert(res.message);
        }
      }
    );
  }

  onSaveAndNew() {
    this.onSave(false);
  }

  onChangeLocalization(localization: Localization) {
    this.helper.copyLocalization(this.school, localization);
  }

  clearFields() {
    this.school = new School();
    this.school.registrationDate = new Date().toISOString().slice(0,10);
  }


  onLanguageClick(value: string) {

    let index = this.selectedLanguages.indexOf(value);
    if (index >= 0) {
      this.selectedLanguages.splice(index, 1);
    } else {
      this.selectedLanguages.push(value);
    }
    this.school.languages = JSON.stringify(this.selectedLanguages);
  }

  getSelected(value: string): boolean {
    return this.selectedLanguages.indexOf(value) >= 0;
  }

}
