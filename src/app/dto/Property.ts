export class Property {

    constructor (
        public ownerName: string = null,
        public ownerDocument: string = null,
        public ownerEmail: string = null,
        public ownerPhone: string = null,
        public ownerMotherTongue: string = null,
        public observation: string = null,
        public addressLine1: string = null, public active: number = 1,
        public addressLine2: string = null, public city: string = null,
        public state: string = null, public  country: string = null, public  postalCode: string = null,
        public transportation: string = null,
        public facilities: string = null,
        public numberOfMeals: number = null,
        public otherTransports: string = null,
        public pets: string = null,
        public menu: string = null,
        public id : number = null,
        public otherFoodTypes: string = null,
        public allowence: string = null,
        public propertyType: string = null,
        public ownerCountry: string = null,
        public roomTypes: string = null,
    ) {}


}