import { Component, Input } from '@angular/core';
import { IProducts } from 'src/app/web/interfaces/IProducts.interface';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {
  @Input({required: true}) product!: IProducts;
}
