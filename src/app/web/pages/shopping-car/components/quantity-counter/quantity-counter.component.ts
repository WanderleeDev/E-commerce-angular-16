import { Component, Input } from '@angular/core';
//  services
import { ShoppingCartService } from 'src/app/web/services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-quantity-counter',
  templateUrl: './quantity-counter.component.html',
  styleUrls: ['./quantity-counter.component.scss']
})
export class QuantityCounterComponent {
  @Input({required: true}) totalProduct = 0;
  @Input({required: true}) productId!: number;

  constructor (
    private shoppingCartSvc: ShoppingCartService,
  ) {}

  public incrementQuantity (id: number): void {
    this.shoppingCartSvc.incrementProduct(id);
  }

  public decrementQuantity (id: number): void {
    this.shoppingCartSvc.decrementProduct(id);
  }
}
