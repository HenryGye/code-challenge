import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadFileService {

  constructor(private http: HttpClient) { }

  loadFile(fileName:string) {
    const filePath = `assets/files/${fileName}`;
    return this.http.get(filePath, { responseType: 'text' });
  }
}
