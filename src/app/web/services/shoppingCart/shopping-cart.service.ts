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
    this.setBackUpShoppingCar();
  }

  public getShopCartOb$(): Observable<IMyProductsCar[]> {
    return this.shoppingCart$.asObservable();
  }

  private setBackUpShoppingCar(): void {
    const backupShoppingCar: IMyProductsCar[] = this.LocalStorageSvc.getLocalStorage(this.localStorageKey);
    this.shoppingCart$.next(backupShoppingCar);
    // this.LocalStorageSvc.saveLocalStorage('shoppingCar', this.shoppingCart$.getValue());
    // this.updateShoppingCart(backupShoppingCar);
  }

  public updateShoppingCart(newProducts: IMyProductsCar[]): void {
    const newProductsList = newProducts.map((product) => ({ ...product }));
    const previousShoppingProducts = this.shoppingCart$.getValue();
    const repeatProducts = previousShoppingProducts.flatMap((prevProduct) => {
      const arr = newProductsList.filter((item) =>
        this.areProductsEqual(item, prevProduct)
      );
      return arr;
    });

    const summaryQuantity = repeatProducts.map((product) => {
      const matchingProduct = previousShoppingProducts.find(
        (item) => item.title === product.title
      );
      return (
        matchingProduct && {
          ...matchingProduct,
          quantity: matchingProduct.quantity + product.quantity,
        }
      );
    });

    const noRepeatProducts = newProductsList.filter((product) =>
      newProductsList.some((item) => {
        return item.title.toLowerCase() === product.title.toLowerCase();
      })
    );

    console.log('productos repetidos', repeatProducts);
    console.log('suma de objetos repetidos', summaryQuantity);
    console.log('productos no repetidos', noRepeatProducts);

    // this.shoppingCart$.next(newProducts);
    // this.toastrSvc.success(`${products.length} ${this.newProductMessage}`);
    // this.LocalStorageSvc.saveLocalStorage('shoppingCar', newProducts);
  }

  private areProductsEqual(
    productA: IMyProductsCar,
    productB: IMyProductsCar
  ): boolean {
    return productA.title.toLowerCase() === productB.title.toLowerCase();
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
