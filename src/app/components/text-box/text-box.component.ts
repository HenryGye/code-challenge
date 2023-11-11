import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GoogleMapsApiService } from 'src/app/services/google-maps-api/google-maps-api.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Output() places = new EventEmitter<google.maps.places.AutocompletePrediction[]>();
  address!: string;

  constructor(private gmas: GoogleMapsApiService) {}

  ngOnInit(): void {}

  searchAddress() {
    if (!this.address) {
      this.places.emit([]);
      return;
    }
    
    this.gmas.searchPlaces(this.address).subscribe({
      next: (data) => {
        let result = data.slice(0, 3);
        this.places.emit(result);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
