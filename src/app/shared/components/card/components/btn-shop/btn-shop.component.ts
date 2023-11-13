import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-shop',
  templateUrl: './btn-shop.component.html',
  styleUrls: ['./btn-shop.component.scss']
})
export class BtnShopComponent {
  isActiveAnimateClass = false;

  public animateBtn (): void {
    if (this.isActiveAnimateClass) return

    this.isActiveAnimateClass = true;

    setTimeout((): void => {
      this.isActiveAnimateClass = false
    }, 1000)
  }
}
