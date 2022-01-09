// import { User } from './User';
// import { Company } from './Company';

/**
 * a variable that a class can be used to refer to its type
 * or refer to the user type
 */

/** -- Interface in an instruction to all other class
 *  on how to be a 'addmark' argument 
 * -- */
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    // adding new requirement to our interface
    // function must return string
    markerContent(): string;
    color: string;
}

export class CustomMap 
{
    private googleMap: google.maps.Map;

    constructor (divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
                                zoom: 1,
                                center: {
                                    lat: 0,
                                    lng: 0
                                }
                            });
    }

    // change the name to addMarker
    // User | Company -->> change the instance
    // addMarker (mappable: User | Company): void
    // limits number of Properties 
    // Make use of Interface
    addMarker (mappable: Mappable): void
    {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker)
        })
    }

    // addCompanyMarker (company: Company): void
    // {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
}