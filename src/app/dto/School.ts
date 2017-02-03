/**
 * Created by marciomanske on 2017-01-31.
 */

export class School {

    constructor(public id : number = null,
                public name: string = null,
                public document: string = null,
                public contactName: string = null,
                public contactPhone: string = null,
                public contactEmail: string = null,
                public discountMonths: number = null,
                public discountAmount: number = null,
                public registrationDate: string = null,
                public active: number = 1,
                public city: string = null,
                public state: string = null,
                public country: string = null,
                public postalCode: string = null,
                public addressLine1: string = null,
                public addressLine2: string = null,
                public studentsPricingRules: string = null,
                public schoolPricingRules: string = null,
                public languages: string = null
              ) {
    }

}
