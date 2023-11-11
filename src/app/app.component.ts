import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { OptionModal } from './interfaces/option-modal';
import { SharedService } from './services/shared.service';
import { Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'code-challenge';
  options!: OptionModal;
  showModal!: boolean;
  private subscription = new Subscription;

  constructor(private sharedService: SharedService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = combineLatest([
      this.sharedService.getShowModal(),
      this.sharedService.getOptionsModal()
    ]).subscribe(([showModal, options]) => {
      this.showModal = showModal;
      this.options = options;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  closeModal() {
    this.sharedService.setShowModal(false);
  }
}
