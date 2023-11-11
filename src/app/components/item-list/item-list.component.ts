import { Component, Input, OnInit } from '@angular/core';
import { GoogleMapsApiService } from 'src/app/services/google-maps-api/google-maps-api.service';
import { LoadFileService } from 'src/app/services/load-file/load-file.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() placesList: google.maps.places.AutocompletePrediction[] = [];
  srcImg: string = 'assets/icons/map-pin-gray.png';
  fileName: string = 'zips permitidos.txt';
  zipCodeList: string[] = [];

  constructor(private gmas: GoogleMapsApiService, private fs: LoadFileService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.loadZipCodeFile();
  }

  searchZipCode(item: google.maps.places.AutocompletePrediction) {
    this.gmas.searchZipCode(item.place_id).subscribe({
      next: (data) => {
        const code = this.zipCodeList.find(e => e === data?.long_name);
        this.sharedService.setShowModal(true);
        code ? this.sharedService.setZipCodeMessageValid() : this.sharedService.setZipCodeMessageInvalid();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  loadZipCodeFile() {
    this.fs.loadFile(this.fileName).subscribe({
      next: (data) => {
        const zipCodes = data.split('\n');
        this.zipCodeList = zipCodes;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
