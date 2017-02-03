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
  errorMessage: string = null;
  confirmMessage: string = null;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
    let token = this.route.snapshot.queryParams['token'];

    if (token != null) {
      this.userService.searchByToken(token).then(
        res => {
          if (res.status === 1) {
            this.user = res.user;
          } else {
            alert(res.message);
          }
        }
      );

    }

  }


  onSave(newPassword: string, newPassword2: string) {
    this.errorMessage = null;
    if (newPassword === null || newPassword.trim() === "") {
      this.errorMessage = "The password cannot be empty";
      return;
    }
    if (newPassword2 === null || newPassword2.trim() === "") {
      this.errorMessage = "The password cannot be empty";
      return;
    }
    if (newPassword != newPassword2) {
      this.errorMessage = "The typed passwords must be the same!";
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
          this.errorMessage = res.message;
        }
      }
    );
  }

}
