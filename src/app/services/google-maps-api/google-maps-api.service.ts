import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsApiService {

  constructor() { }

  searchPlaces(address: string): Observable<google.maps.places.AutocompletePrediction[]> {
    return new Observable((observer: Observer<google.maps.places.AutocompletePrediction[]>) => {
      const autocompleteService = new google.maps.places.AutocompleteService();
      autocompleteService.getPlacePredictions(
        { input: address },
        (predictions: google.maps.places.AutocompletePrediction[], status: google.maps.places.PlacesServiceStatus) => {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            observer.next(predictions);
            observer.complete();
          } else {
            observer.error('No hay sugerencias para mostrar.');
          }
        }
      );
    });
  }

  searchZipCode(placeId: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      const placesService = new google.maps.places.PlacesService(document.createElement('div'));
      placesService.getDetails({ placeId }, (place: { address_components: any[]; }, placeStatus: any) => {
        if (placeStatus == google.maps.places.PlacesServiceStatus.OK) {
          const zipCode = place.address_components.find((component: { types: string | string[]; }) => component.types.includes('postal_code'));
          observer.next(zipCode);
          observer.complete();
        } else {
          observer.error('No se pudieron obtener detalles del lugar.');
        }
      });
    });
  }
}
