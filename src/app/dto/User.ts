/**
 * Created by marciomanske on 2017-01-19.
 */

//{passport: null, name: null, email: null, username: null, type: null,
//address: {city: null, state: null, country: null, postalCode: null, addressLine1: null, addressLine2: null},
//phone: {home: null, mobile: null, work: null}, passwordRecoveryType: 3};

export class User {


  constructor (public passport: string = null,
               public name: string = null,
               public email: string = null,
               public username: string = null,
               public city: string = null,
               public state: string = null,
               public country: string = null,
               public postalCode: string = null,
               public addressLine1: string = null,
               public addressLine2: string = null,
               public home: string = null,
               public mobile: string = null,
               public work: string = null,
               public passwordRecoveryType: number = 3,
               public role: string = null,
               public active: number = 1,
               public changePasswordNextLogin: number = 1,
               public id: number = null) {}

}
