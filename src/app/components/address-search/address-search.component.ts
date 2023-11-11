import { Component } from '@angular/core';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css']
})
export class AddressSearchComponent {
  placesData: google.maps.places.AutocompletePrediction[] = [];

  handlePlaces(data: google.maps.places.AutocompletePrediction[]) {
    this.placesData = data;
  }
}
