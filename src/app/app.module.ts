import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppComponent } from './app.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { AddressSearchComponent } from './components/address-search/address-search.component';
import { ModalMessageComponent } from './components/modal-message/modal-message.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    ItemListComponent,
    HeaderInfoComponent,
    AddressSearchComponent,
    ModalMessageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
