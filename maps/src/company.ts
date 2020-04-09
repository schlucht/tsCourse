import faker from 'faker';
import { IMapPosition } from './position';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: IMapPosition;

    constructor() {
        this.catchPhrase = faker.company.catchPhrase();
        this.companyName = faker.company.companyName();
        this.location = { 
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())    
        }    
    }

       toString(): string {
        return `Hallo,<br> <b>${this.companyName}</b>`;
    }
}
