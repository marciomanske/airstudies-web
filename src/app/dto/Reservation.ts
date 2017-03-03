export class Reservation {
    constructor(
        public student: string = null,
        public checkin:string = null,
        public id: number = null,
        public checkout:string = null,
        public roomTypes:string = null,
        public active: number = null,
        public observation: string = null
    
    
    ){}
}