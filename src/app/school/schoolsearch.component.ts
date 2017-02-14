import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { SchoolSearch } from '../dto/SchoolSearch';
import { Language } from '../dto/Language';
import {Status} from "../dto/Status";
import {SchoolService} from "../services/school/school.service";
import {ConfigService} from "../config/config.service";
import {School} from "../dto/School";
import {HelperService} from "../services/helper/helper.service";
import {BaseSerchComponent} from "../basecomponent/base-search-component";

@Component({
  selector: 'app-schoolsearch',
  templateUrl: './schoolsearch.component.html',
  styleUrls: ['../customcss/formstyle.css']
})
export class SchoolSearchComponent extends BaseSerchComponent implements OnInit  {

  school: SchoolSearch = new SchoolSearch();
  languages: Language[];
  schoolStatus: Status[] = this.config.statusList;
  schoolToDelete: School = null;
  googleMapURL: string;

  constructor(private schoolService: SchoolService, private config: ConfigService, private router: Router,
              private helper: HelperService) {
      super();
  }

  ngOnInit() {
    this.languages = this.config.languages;
    this.googleMapURL = this.config.url.googleMapURL;
  }


  onPlaceChanged(data: any) {
    this.school.city = null;
    this.school.state = null;
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
            languageNames += this.helper.findLanguageByValue(lang).label + " ";
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
    this.searchErrorMessage = null;
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

    if (this.school.language !== "ALL") {
        params.push(
            {value: this.school.language,
                operation: 4,
                attributeName: "languages",
                like: true});
    }



    if (this.school.city) {
      params.push(
        {value: this.school.city,
          operation: 4,
          attributeName: "localization.city",
          like: false});
    }
    if (this.school.state) {
      params.push(
        {value: this.school.state,
          operation: 4,
          attributeName: "localization.state",
          like: false});
    }
    if (this.school.country) {
      params.push(
        {value: this.school.country,
          operation: 4,
          attributeName: "localization.country",
          like: false});
    }




    this.schoolService.search(params).then(
      res => {
        if (res.status === 1) {
          this.searchResult = res.result;
          this.showNoResultsFound = this.searchResult.length === 0;
        } else {
            this.searchErrorMessage = "Error executing search";
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
          this.searchErrorMessage = "School is already inactive";
      } else {
        localSchool.active = 0;
        this.schoolService.update(localSchool).then(
          res => {
            if (res.status === 1) {
              this.onSearch();
            } else {
                this.searchErrorMessage = res.message;
            }
          }
        )
      }

    }
  }
}
