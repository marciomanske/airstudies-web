import {Component} from '@angular/core';
import {StudentSearch} from "../dto/StudentSearch";
import {ConfigService} from "../config/config.service";
import {Router} from "@angular/router";
import {StudentService} from "../services/student/student.service";
import {Student} from "../dto/Student";
import {BaseSerchComponent} from "../basecomponent/base-search-component";


@Component({
    selector: 'app-student-search',
    templateUrl: './student-search.component.html',
    styleUrls: ['../customcss/formstyle.css']
})
export class StudentSearchComponent extends BaseSerchComponent {

    studentToDelete: Student = null;

    constructor(public config: ConfigService, private router: Router,
                private studentService: StudentService) {
        super();
    }

    studentSearch: StudentSearch = new StudentSearch();


    onPlaceChanged(data: any) {
        this.studentSearch.city = null;
        this.studentSearch.state = null;
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

    onEdit(id: number) {
        this.router.navigate(["/admin/studentregister/" + id]);
    }

    onDelete(student: Student) {
        this.studentToDelete = student;
    }

    onConfirmDelete() {
        this.searchErrorMessage = null;
        if (this.studentToDelete) {
            let localStudent = this.studentToDelete;
            this.studentToDelete = null;
            if (localStudent.active === 0) {
                this.searchErrorMessage = "Student is already inactive";
            } else {
                localStudent.active = 0;
                this.studentService.update(localStudent).then(
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

    onSearch() {
        this.searchErrorMessage = null;
        let params = [];
        this.studentSearch.city = null;
        this.studentSearch.state = null;
        this.studentSearch.country = null;

        if (this.studentSearch.name) {
            params.push(
                {
                    value: this.studentSearch.name,
                    operation: 4,
                    attributeName: "name",
                    like: true
                });
        }

        let value = parseInt(this.studentSearch.status === "ALL" ? "-1" : this.studentSearch.status, 10);

        if (value >= 0) {
            params.push(
                {
                    value: value,
                    operation: 1,
                    attributeName: "active",
                    like: false
                });
        }

        if (this.studentSearch.city) {
            params.push(
                {
                    value: this.studentSearch.city,
                    operation: 4,
                    attributeName: "localization.city",
                    like: false
                });
        }

        if (this.studentSearch.state) {
            params.push(
                {
                    value: this.studentSearch.state,
                    operation: 4,
                    attributeName: "localization.state",
                    like: false
                });
        }

        if (this.studentSearch.country) {
            params.push(
                {
                    value: this.studentSearch.country,
                    operation: 4,
                    attributeName: "localization.country",
                    like: false
                });
        }

        this.studentService.search(params).then(
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
