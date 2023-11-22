import { Injectable } from '@angular/core';
//  interface
import { IProducts } from '../../interfaces/IProducts.interface';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart$ = new BehaviorSubject<IProducts[]>([]);

  public addPurchase (product: IProducts): void {
    this.updateShoppingCart(product);
  }

  private updateShoppingCart (value: IProducts | IProducts[]): void {

    // this.shoppingCart$.next([...this.shoppingCart$.getValue(), value]);
  }

  private isProductsArray(eval: IProducts | IProducts[]): eval is IProducts[] {
    if (Array.isArray(eval)) {
      const verifyChildren = eval.every(e => (
        'title' in e && 'rating' in e
      ))
      return verifyChildren
    }
  }
}
