/**
 * Created by marciomanske on 2017-02-03.
 */

export class Student {

    constructor (
        public name: string = null,
        public passport: string = null,
        public email: string = null,
        public birthDate: string = null,
        public phone: string = null,
        public motherTongue: string = null,
        public requireSpecialNeeds: number = 0,
        public specialNeedsDescription: string = null,
        public observation: string = null,
        public contactName: string = null,
        public contactPhone: string = null,
        public contactEmail: string = null,
        public addressLine1: string = null, public active: number = 1,
        public addressLine2: string = null, public city: string = null,
        public state: string = null, public  country: string = null, public  postalCode: string = null
    ) {}


}
