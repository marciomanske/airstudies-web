import { Injectable } from '@angular/core';

import { Language } from '../dto/Language';
import { Status } from '../dto/Status';
import { UserType } from '../dto/UserType';


@Injectable()
export class ConfigService {



  url = {
    baseAddress: "http://localhost:3500",
    user: {
      login: "/airstudies/services/user/authenticate",
      validateToken: "/airstudies/services/user/validatetoken",
      find: "/airstudies/services/user/list",
      findById: "/airstudies/services/user",
      new: "/airstudies/services/user/new",
      update: "/airstudies/services/user/update",
      updatePassword: "/airstudies/services/user/updatePassword",
      recoverPassword: "/airstudies/services/user/recoverpassword",
    },
    school: {
      find: "/airstudies/services/school/list",
      findById:"/airstudies/services/school",
      new:"/airstudies/services/user/school",
      update: "/airstudies/services/school/update"
    },
    googleMapURL: "https://maps.googleapis.com/maps/api/geocode/json?address=:my_own_keyword&language=en"
  };

  languages = [
    new Language("ALL", "All languages"),
    new Language("1", "English"),
    new Language("2", "Spanish"),
    new Language("3", "French"),
    new Language("4", "German"),
    new Language("5", "Portuguese")
  ];

  statusList = [
    new Status("ALL", "All"),
    new Status("1", "Actives only"),
    new Status("0", "Inactives only")
  ];


   recoveryMethods = [
   {value: 1, label: "E-mail"},
   {value: 2, label: "SMS"},
   {value: 3, label: "Both"}
   ];

  userTypes = [
    new UserType("ALL", "All users"),
    new UserType("ADMIN", "Administrator"),
    new UserType("SCHOOL", "School"),
    new UserType("STUDENT", "Student"),
    new UserType("AGENCY", "Agency"),
    new UserType("HOUSE_OWNER", "House Owner")
  ];

}
