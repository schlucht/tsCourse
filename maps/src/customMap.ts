/// <reference types="@types/googlemaps" />

import { IMapPosition } from './position'

export class CustomMap {
    private googleMap: google.maps.Map
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(
            document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        }
        )
    }
    private addInfoWindow(content: string) {
        return new google.maps.InfoWindow({
            content: content
        })
    }
    addMarker(pos: IMapPosition, infos: string): void {
        const marker = new google.maps.Marker({
            position: {
                lat: pos.lat,
                lng: pos.lng,               
            },
            map: this.googleMap
        })
        marker.addListener('click', () => {
            this.addInfoWindow(infos).open(this.googleMap, marker);
        })
    }   
}