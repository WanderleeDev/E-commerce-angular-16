import { Component } from '@angular/core';

@Component({
  selector: 'app-box-total-price',
  templateUrl: './box-total-price.component.html',
  styleUrls: ['./box-total-price.component.scss']
})
export class BoxTotalPriceComponent {
  taxes = 10;
  dataBox = [
    'subtotal',
    'taxes',
    'total'
  ];
}
