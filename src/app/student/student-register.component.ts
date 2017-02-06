import { Component, OnInit } from '@angular/core';
import {Student} from "../dto/Student";
import {HelperService} from "../services/helper/helper.service";
import {Localization} from "../dto/Localization";
import {ConfigService} from "../config/config.service";

@Component({
    templateUrl: './student-register.component.html',
    styleUrls: ['../customcss/formstyle.css']
})
export class StudentRegisterComponent implements OnInit {

  private student: Student = new Student();

  constructor(private helper: HelperService, private config: ConfigService) { }

    ngOnInit() {
      this.student = new Student();
    }

    onChangeLocalization(localization: Localization) {
        this.helper.copyLocalization(this.student, localization);
    }

    onChangeSpecialNeeds(obj: any) {
        obj.target.checked?this.student.requireSpecialNeeds = 1:this.student.requireSpecialNeeds = 0;
        if (this.student.requireSpecialNeeds === 0) {
            this.student.specialNeedsDescription = null;
        }
    }

    onLanguageChange(data:any) {
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

        alert(JSON.stringify(this.student));
        /*
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
        ); */
    }

    onSaveAndNew() {
        this.onSave(false);
    }
}
