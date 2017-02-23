import {School} from "./School";
import {Property} from "./Property";

export class ContractSearch {
    constructor(
    
    public contract: string = null,
    public school: string = null,
    public schoolLocation: string = null,
    public city: string = null,
    public country: string = null,
    public state: string = null,
    public status: string = null,
    public property: string = null,
    public propertyLocation: string = null,
    public active: number = 1,
    public ownerName: Property = null,
    public schoolName: School = null,
    
    ){}
}