import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return `
        <div> 
        <h5> Company : ${this.companyName} </h5>
        <h4> Catch Phrase : ${this.catchPhrase} </h4>
        </div>
        `;
    }
}
