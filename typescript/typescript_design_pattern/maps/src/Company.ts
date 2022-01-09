import { Mappable } from './CustomMap'
import faker from 'faker'

export class Company implements Mappable
{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    color = 'red';

    constructor () {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent (): string {
        return `
            <div>
                <h3>Company: ${this.companyName}</h3>
                <h6>CatchPhrase: ${this.catchPhrase}</h6>
            </div>
        `;
    }
}