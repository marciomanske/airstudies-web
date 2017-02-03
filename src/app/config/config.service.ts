import { Injectable } from '@angular/core';

import { Language } from '../dto/Language';
import { Status } from '../dto/Status';
import { UserType } from '../dto/UserType';


@Injectable()
export class ConfigService {

  url = {
    user: {
      login: "http://localhost:3500/airstudies/services/user/authenticate",
      validateToken: "http://localhost:3500/airstudies/services/user/validatetoken",
      find: "http://localhost:3500/airstudies/services/user/list",
      findById: "http://localhost:3500/airstudies/services/user",
      new: "http://localhost:3500/airstudies/services/user/new",
      update: "http://localhost:3500/airstudies/services/user/update",
      updatePassword: "http://localhost:3500/airstudies/services/user/updatePassword",
      recoverPassword: "http://localhost:3500/airstudies/services/user/recoverpassword",
    },
    school: {
      find: "http://localhost:3500/airstudies/services/school/list",
      findById:"http://localhost:3500/airstudies/services/school",
      new:"http://localhost:3500/airstudies/services/user/school",
      update: "http://localhost:3500/airstudies/services/school/update"
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
