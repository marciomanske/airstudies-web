import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import {UserService} from "../services/user/user.service";
import {User} from "../dto/User";

@Component({
  selector: 'app-userpasswordrecover',
  templateUrl: './userpasswordrecover.component.html',
  styleUrls: []
})
export class UserPasswordRecoverComponent implements OnInit {

  user: User = null;
  confirmMessage: string = null;
  registerErrorMessage: string = null;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
    let token = this.route.snapshot.queryParams['token'];
    this.registerErrorMessage = null;
    this.confirmMessage = null;
    if (token != null) {
      this.userService.searchByToken(token).then(
        res => {
          if (res.status === 1) {
            this.user = res.user;
          } else {
            this.registerErrorMessage = res.message;
          }
        }
      );

    }

  }


  onSave(newPassword: string, newPassword2: string) {
    this.registerErrorMessage = null;
    if (newPassword === null || newPassword.trim() === "") {
      this.registerErrorMessage = "The password cannot be empty";
      return;
    }
    if (newPassword2 === null || newPassword2.trim() === "") {
      this.registerErrorMessage = "The password cannot be empty";
      return;
    }
    if (newPassword != newPassword2) {
      this.registerErrorMessage = "The typed passwords must be the same!";
      return;
    }

    this.userService.updatePassword(this.user.id, newPassword).then(
      res => {
        if (res.status === 1) {
          this.confirmMessage = "Password changed successfully. Redirecting to main page...";
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);
        } else {
          this.registerErrorMessage = res.message;
        }
      }
    );
  }

}
