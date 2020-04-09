import faker from 'faker';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.catchPhrase = faker.company.catchPhrase();
        this.companyName = faker.company.companyName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
}
