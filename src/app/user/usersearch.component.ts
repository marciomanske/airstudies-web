import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserSearch } from "../dto/UserSearch";
import { UserService } from "../services/user/user.service";
import {User} from "../dto/User";
import {Status} from "../dto/Status";
import {ConfigService} from "../config/config.service";


@Component({
  templateUrl: './usersearch.component.html',
  styleUrls: ['../customcss/formstyle.css']
})
export class UserSearchComponent {

  constructor(private userService: UserService, private router: Router, private config: ConfigService){}

  userStatus: Status[] = this.config.statusList;

  userTypes = this.config.userTypes;


  showNoResultsFound: boolean = false;

  user = new UserSearch(null, "ALL", "ALL");

  userToDelete: User = null;

  searchResult = [];


  onNewRegister() {
      this.router.navigate(['/admin/userregister/-1']);
  }

  onSearch() {
    let params = [];

    if (this.user.name) {
      params.push(
          {value: this.user.name,
            operation: 4,
            attributeName: "name",
            like: true});
    }


    let value = parseInt(this.user.status === "ALL"?"-1":this.user.status, 10);

    if (value >= 0) {
      params.push(
          {value: value,
            operation: 1,
            attributeName: "active",
            like: false});
    }

    if (this.user.type && this.user.type !==  "ALL") {
      params.push(
          {value: this.user.type,
            operation: 1,
            attributeName: "role",
            like: false});
    }

    this.userService.search(params).then(
        res => {
          if (res.status === 1) {
            this.searchResult = res.result;
            this.showNoResultsFound = this.searchResult.length === 0;
          }
        }
    );
  }

    onConfirmDelete() {

        if (this.userToDelete) {
          let localUser = this.userToDelete;
          this.userToDelete = null;
          if (localUser.active === 0) {
            alert("User is already inactive");
          } else {
            localUser.active = 0;
            this.userService.update(localUser).then(
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

    onEdit(id: number) {
      this.router.navigate(["/admin/userregister/"+id]);
    }

    onDelete(user: User) {
      this.userToDelete = user;
    }
}
