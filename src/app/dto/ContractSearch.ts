import {School} from "./School";
import {Property} from "./Property";

export class ContractSearch {
    constructor(
    
    public contract: string = null,
    public school: string = null,
    public city: string = null,
    public country: string = null,
    public state: string = null,
    public status: string = null,
    public active: number = 1,
    public ownerName: string = null,
    public addressLine1: string = null,
    public addressLine2: string = null
    
    ){}
}