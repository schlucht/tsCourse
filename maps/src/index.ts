/// <reference types="@types/googlemaps" />

import { User } from './user';
import { Company } from './company';

const user = new User();
const compony = new Company();
console.log(new User());
console.log(new Company());
console.log(google);
new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});
