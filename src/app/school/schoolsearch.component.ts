import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { SchoolSearch } from '../dto/SchoolSearch';
import { Language } from '../dto/Language';
import {Status} from "../dto/Status";
import {SchoolService} from "../services/school/school.service";
import {ConfigService} from "../config/config.service";
import {School} from "../dto/School";
import {HelperService} from "../services/helper/helper.service";

@Component({
  selector: 'app-schoolsearch',
  templateUrl: './schoolsearch.component.html',
  styleUrls: ['../customcss/formstyle.css']
})
export class SchoolSearchComponent implements OnInit {

  school: SchoolSearch = new SchoolSearch(null, null, null,null, "ALL", "ALL");
  languages: Language[];
  schoolStatus: Status[] = this.config.statusList;
  searchResult = [];
  schoolToDelete: School = null;
  googleMapURL: string;
  showNoResultsFound: boolean = false;

  constructor(private schoolService: SchoolService, private config: ConfigService, private router: Router,
              private helper: HelperService) { }

  ngOnInit() {
    this.languages = this.config.languages;
    this.googleMapURL = this.config.url.googleMapURL;
  }


  onPlaceChanged(data: any) {
    this.school.city = null;
    this.school.country = null;
    if (data && data.address_components) {
      let addressComponents = data.address_components;
      for (let index = 0; index < addressComponents.length; index++) {
        let item = addressComponents[index];
        if (item.types.indexOf("locality") >= 0) {
          this.school.city = item.long_name;
        } else if (item.types.indexOf("administrative_area_level_1") >= 0) {
          this.school.state = item.long_name;
        } else if (item.types.indexOf("country") >= 0) {
          this.school.country = item.long_name;
        }
      }

    }
  }

  mountLanguageNames(languages: string): string {
    let languageNames = "";
    if (languages != null) {
      let languageList = JSON.parse(languages);
      languageList.forEach((lang) => {
            languageNames += this.helper.findLanguageByValue(lang) + " ";
          }
        );
    }

    return languageNames;
  }

  onNewRegister() {
    this.router.navigate(['/admin/schoolregister/-1']);
  }

  onSearch() {
    let params = [];

    if (this.school.name) {
      params.push(
        {value: this.school.name,
          operation: 4,
          attributeName: "name",
          like: true});
    }


    let value = parseInt(this.school.status === "ALL"?"-1":this.school.status, 10);

    if (value >= 0) {
      params.push(
        {value: value,
          operation: 1,
          attributeName: "active",
          like: false});
    }

    if (this.school.city) {
      params.push(
        {value: this.school.city,
          operation: 4,
          attributeName: "city",
          like: false});
    }
    if (this.school.state) {
      params.push(
        {value: this.school.state,
          operation: 4,
          attributeName: "state",
          like: false});
    }
    if (this.school.country) {
      params.push(
        {value: this.school.country,
          operation: 4,
          attributeName: "country",
          like: false});
    }




    this.schoolService.search(params).then(
      res => {
        if (res.status === 1) {
          this.searchResult = res.result;
          this.showNoResultsFound = this.searchResult.length === 0;
        }
      }
    );

  }

  onEdit(id: number) {
    this.router.navigate(["/admin/schoolregister/"+id]);
  }

  onDelete(school: School) {
    this.schoolToDelete = school;
  }

  onConfirmDelete() {

    if (this.schoolToDelete) {
      let localSchool = this.schoolToDelete;
      this.schoolToDelete = null;
      if (localSchool.active === 0) {
        alert("School is already inactive");
      } else {
        localSchool.active = 0;
        this.schoolService.update(localSchool).then(
          res => {
            if (res.status === 1) {
              this.onSearch();
            } else {
              alert(res.message);
            }
          }
        )
      }

    }
  }
}
