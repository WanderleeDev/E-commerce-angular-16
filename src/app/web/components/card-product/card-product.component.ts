import { Component, Input } from '@angular/core';
// interface
import { IProducts } from '../../interfaces/IProducts.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input()  productData: IProducts | null = null;
}
