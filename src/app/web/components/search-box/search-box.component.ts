import { Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  isActiveListening = false;
  labelText = 'search by voice';

  public listening (): void {
    this.isActiveListening = !this.isActiveListening;
    this.isActiveListening
      ? this.labelText = 'listening...'
      : this.labelText = 'search by voice'
  }
}
