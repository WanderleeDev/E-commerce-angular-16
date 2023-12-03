import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, reduce } from 'rxjs';
//  interface
import { IOrderSummary } from '../../interfaces/IOrderSummary.interface';
import {
  IProducts,
  IMyProductsCar,
} from '../../interfaces/IProducts.interface';
// services
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { ToastrService } from 'ngx-toastr';

// ! refactor code
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart$ = new BehaviorSubject<IMyProductsCar[]>([]);
  private taxes = 10;
  private readonly localStorageKey = 'shoppingCar';
  private newProductMessage = 'products added to shopping cart';
  private removeProductMessage = 'removed from shopping cart';

  constructor(
    private LocalStorageSvc: LocalStorageService,
    private toastrSvc: ToastrService
  ) {
    this.shoppingCart$.next(
      this.LocalStorageSvc.getLocalStorage(this.localStorageKey)
    );
    console.log(this.shoppingCart$.getValue(), '+');
  }

  public getShopCartOb$(): Observable<IMyProductsCar[]> {
    return this.shoppingCart$.asObservable();
  }

  public updateShoppingCart(newProducts: IMyProductsCar[]): void {
    const myProducts =this.unifyMyProducts(newProducts)

    this.shoppingCart$.next(myProducts);
    this.toastrSvc.success(`${myProducts.length} ${this.newProductMessage}`);
    this.LocalStorageSvc.saveLocalStorage('shoppingCar', this.shoppingCart$.getValue());
  }

  private unifyMyProducts (newProducts: IMyProductsCar[]): IMyProductsCar[] {
    const unifiedProducts =  this.shoppingCart$.getValue().map(prevProduct => {
      const matchingProducts = newProducts.filter(newProduct => newProduct.title.toLowerCase() === prevProduct.title.toLowerCase());

      return matchingProducts.length > 0
      ? {
          ...prevProduct,
          quantity: prevProduct.quantity + matchingProducts.reduce((prev, curr) => prev + curr.quantity, 0) }
      : { ...prevProduct }
    })

    const newProductsNotInPrevious = newProducts.filter((nuevoProducto) => {
      return !unifiedProducts.some((productoAnterior) => nuevoProducto.title.toLowerCase() === productoAnterior.title.toLowerCase());
    });

    return [...unifiedProducts,...newProductsNotInPrevious];
  }

  public getOrderSummary(): IOrderSummary {
    const orderSummary: IOrderSummary = {
      subTotal: 0,
      taxes: 0,
      totalPrice: 0,
    };

    orderSummary.subTotal = this.getSubTotal();
    orderSummary.taxes = this.taxes;
    orderSummary.totalPrice = orderSummary.subTotal + orderSummary.taxes;
    return orderSummary;
  }

  private getSubTotal(): number {
    return this.shoppingCart$
      .getValue()
      .reduce((previous, current) => previous + current.price, 0);
  }
}
