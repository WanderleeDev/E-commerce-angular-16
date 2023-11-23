import { Injectable } from '@angular/core';
//  interface
import { IProducts } from '../../interfaces/IProducts.interface';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart$ = new BehaviorSubject<IProducts[]>([]);

  //  Devuelve un observable del carrito
  public getShopCartOb$ (): Observable<IProducts[]> {
    return this.shoppingCart$.asObservable()
  }

// Agrega un producto o un array de productos al carrito de compras
  public addPurchase (product: IProducts | IProducts[]): void {
    this.updateShoppingCart(product);
  }

// Actualiza el carrito de compras según el producto proporcionado o el array de productos
  private updateShoppingCart (value: IProducts | IProducts[]): void {
    if (this.isSingleProduct(value)) {
      this.shoppingCart$.next([...this.shoppingCart$.getValue(), value]);
      return
    }

    if (this.isProductArray(value)) {
      this.shoppingCart$.next([...value]);
      return
    }

    throw new TypeError('Tipo de dato no válido. Se espera un producto o una lista de productos.')
  }

  //  guards types
  //  verifica q solo sea un producto
  private isSingleProduct (dataProduct:  IProducts | IProducts[]): dataProduct is IProducts {
    return ('title' in dataProduct && 'rating' in dataProduct);
  }

  //  verifica q solo sea un array de productos
  private isProductArray (dataProduct: IProducts | IProducts[]): dataProduct is IProducts[] {
    return (
      Array.isArray(dataProduct) &&
      dataProduct.every(data => this.isSingleProduct(data))
    )
  }
}
