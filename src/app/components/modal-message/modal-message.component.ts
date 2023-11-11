import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OptionModal } from 'src/app/interfaces/option-modal';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent implements OnInit {
  @Input() options!: OptionModal;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  closeModal(): void {
    this.close.emit();
  }
}
