import { Component, Input } from '@angular/core';
import { IProducts } from 'src/app/web/interfaces/IProducts.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({required: true}) productData!: IProducts;
}
