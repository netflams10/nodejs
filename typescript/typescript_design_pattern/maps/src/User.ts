import faker from 'faker';
import { Mappable } from "./CustomMap"

// Convention in typescript is to never use export default
export class User implements Mappable
{
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    color = 'red';

    constructor () {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent (): string {
        return `Username: ${this.name}`
    }
}