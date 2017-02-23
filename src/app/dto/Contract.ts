import {School} from "./School";
import {Property} from "./Property";

export class Contract {
    constructor(
      public schoolId: number = null,
      public propertyId: number = null,
      public school: School = null,
      public property: Property = null,
      public id: number = null,
      public startDate: string = null, 
      public endDate: string = null,
      public active: number = 1,
      public values: string = null,
      public observation: string = null
    ){}
}