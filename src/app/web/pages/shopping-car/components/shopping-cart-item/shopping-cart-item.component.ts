import { Component, Input } from '@angular/core';
import { IMyProductsCar } from 'src/app/web/interfaces/IProducts.interface';
//  services
import { ShoppingCartService } from 'src/app/web/services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {
  @Input({required: true}) product!: IMyProductsCar;

  constructor(private shoppingCartSvc: ShoppingCartService) {}

  public removeProduct (id: number, name:string): void {
    this.shoppingCartSvc.removeProduct(id, name);
  }
}
