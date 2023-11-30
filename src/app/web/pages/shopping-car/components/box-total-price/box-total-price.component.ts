import { Component, Input } from '@angular/core';

//  interfaces
import { IOrderSummary } from 'src/app/web/interfaces/IOrderSummary.interface';

@Component({
  selector: 'app-box-total-price',
  templateUrl: './box-total-price.component.html',
  styleUrls: ['./box-total-price.component.scss']
})
export class BoxTotalPriceComponent {
  @Input() orderSummary!: IOrderSummary;
}
