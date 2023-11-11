import { Injectable } from '@angular/core';
import { OptionModal } from '../interfaces/option-modal';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private options = new Subject<OptionModal>();
  private showModal = new Subject<boolean>()

  constructor() { }

  setShowModal(value: boolean) {
    this.showModal.next(value);
  }

  getShowModal(): Observable<boolean> {
    return this.showModal.asObservable();
  }

  setZipCodeMessageValid() {
    this.options.next({
      title: 'Address updated',
      subtitle: 'New address added to your account',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id explicabo laudantium modi, repudiandae dolorem iste reprehenderit atque, optio nisi nemo porro neque earum sequi minus praesentium omnis assumenda magnam natus!',
      textButton: 'UNDERSTOOD'      
    });
  }

  setZipCodeMessageInvalid() {
    this.options.next({
      title: 'Out of Delivery Area',
      subtitle: `"Wherever I go, there I am."`,
      text: `Sadly, this quote is not true for us. In other words, we are not operating in your area (yet), but things change everyday.<br><br>Sign up to our newsletter to get notified.`,
      textButton: 'UNDERSTOOD'      
    });
  }

  getOptionsModal(): Observable<OptionModal> {
    return this.options.asObservable();
  }
}
