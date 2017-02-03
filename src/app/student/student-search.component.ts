import { Component, OnInit } from '@angular/core';
import {StudentSearch} from "../dto/StudentSearch";
import {ConfigService} from "../config/config.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['../customcss/formstyle.css']
})
export class StudentSearchComponent implements OnInit {

    constructor(public config: ConfigService, private router: Router) { }

    studentSearch: StudentSearch = new StudentSearch();


    ngOnInit() {
    }

    onPlaceChanged(data: any) {
        this.studentSearch.city = null;
        this.studentSearch.country = null;
        if (data && data.address_components) {
            let addressComponents = data.address_components;
            for (let index = 0; index < addressComponents.length; index++) {
                let item = addressComponents[index];
                if (item.types.indexOf("locality") >= 0) {
                    this.studentSearch.city = item.long_name;
                } else if (item.types.indexOf("administrative_area_level_1") >= 0) {
                    this.studentSearch.state = item.long_name;
                } else if (item.types.indexOf("country") >= 0) {
                    this.studentSearch.country = item.long_name;
                }
            }

        }
    }

    onNewRegister() {
        this.router.navigate(['/admin/studentregister/-1']);
    }

}
