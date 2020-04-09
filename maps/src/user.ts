import faker from 'faker';
import { IMapPosition } from './position';


export class User {
    name: string;
    location: IMapPosition

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lng: parseFloat(faker.address.latitude()),
            lat: parseFloat(faker.address.longitude())
        }
    }

    toString(): string {
        return `Hallo, <br> <b>${this.name}</b>`;
    }
}
