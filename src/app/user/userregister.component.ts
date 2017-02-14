import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import {User} from "../dto/User";
import {UserService} from "../services/user/user.service";
import {Localization} from "../dto/Localization";
import {ConfigService} from "../config/config.service";
import {HelperService} from "../services/helper/helper.service";

@Component({
    templateUrl: './userregister.component.html',
    styleUrls: ['../customcss/formstyle.css']
})
export class UserRegisterComponent implements OnInit {

    user = new User();

    registerErrorMessage: string = null;

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,
                private config: ConfigService, private helper: HelperService) {
    }

    ngOnInit() {
        let userId = this.route.snapshot.params['id'];
        this.registerErrorMessage = null;
        if (userId > 0) {
            this.userService.searchById(userId).then(
                res => {
                    if (res.status === 1) {
                        this.user = res.result;
                    } else {
                        alert(res.result.message);
                    }
                }
            );

        } else {
            this.user = new User();
        }

    }


    userTypes = this.config.userTypes;
    recoveryMethods = this.config.recoveryMethods;

    onSave(moveBack: boolean, form: any) {


        let fcn = "new";
        if (this.user.id !== null) {
            fcn = "update";
        }


        this.userService[fcn](this.user).then(
            res => {
                if (res.status === 1) {
                    form.reset();
                    this.clearFields();
                    if (moveBack) {
                        this.router.navigate(['/admin/usersearch']);
                    }
                } else {
                    //alert(res.message);
                    this.registerErrorMessage = res.message;
                }
            }
        );


    }

    onSaveAndNew(form: any) {
        this.onSave(false, form);
    }

    onChangeLocalization(localization: Localization) {
        this.helper.copyLocalization(this.user, localization);
    }

    clearFields() {
        this.user = new User();
    }


}
