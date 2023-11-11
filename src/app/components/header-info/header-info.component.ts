import { Component } from '@angular/core';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.css']
})
export class HeaderInfoComponent {
  title: string = 'Where are you located?';
  subtitle: string = 'So we know where to drop off the stuff';
  text: string = `We won't share your address<br>with your ex (or whoever).`;
}
