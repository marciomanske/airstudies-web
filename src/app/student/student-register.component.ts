import {Component, OnInit} from '@angular/core';
import {Student} from "../dto/Student";
import {HelperService} from "../services/helper/helper.service";
import {Localization} from "../dto/Localization";
import {ConfigService} from "../config/config.service";
import {StudentService} from "../services/student/student.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './student-register.component.html',
    styleUrls: ['../customcss/formstyle.css']
})
export class StudentRegisterComponent implements OnInit {

    registerErrorMessage: string = null;

    private student: Student = new Student();

    constructor(private helper: HelperService, private config: ConfigService,
                private studentService: StudentService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        let studentId = this.route.snapshot.params['id'];
        this.registerErrorMessage = null;
        if (studentId > 0) {
            this.studentService.searchById(studentId).then(
                res => {
                    if (res.status === 1) {
                        this.student = res.result;
                    } else {
                        this.registerErrorMessage = res.message;
                    }
                });
        } else {
            this.student = new Student();
        }

    }

    onChangeLocalization(localization: Localization) {
        this.helper.copyLocalization(this.student, localization);
    }

    onChangeSpecialNeeds(obj: any) {
        obj.target.checked ? this.student.requireSpecialNeeds = 1 : this.student.requireSpecialNeeds = 0;
        if (this.student.requireSpecialNeeds === 0) {
            this.student.specialNeedsDescription = null;
        }
    }

    onLanguageChange(data: any) {
        this.student.motherTongue = null;
        if (data) {
            this.student.motherTongue = data.name;
        }
    }

    onSave(moveBack: boolean) {
        let fcn = "new";
        if (this.student.id !== null) {
            fcn = "update";
        }
        this.registerErrorMessage = null;
        this.studentService[fcn](this.student).then(
            res => {
                if (res.status === 1) {
                    this.clearFields();
                    if (moveBack) {
                        this.router.navigate(['/admin/studentsearch']);
                    }

                } else {
                    this.registerErrorMessage = res.message;
                }
            });
    }

    clearFields() {
        this.student = new Student();
    }

    onSaveAndNew() {
        this.onSave(false);
    }

}


