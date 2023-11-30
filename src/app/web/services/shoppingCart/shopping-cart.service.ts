import { Injectable } from '@angular/core';
//  interface
import { IProducts } from '../../interfaces/IProducts.interface';
import { BehaviorSubject, Observable } from 'rxjs';

import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { IOrderSummary } from '../../interfaces/IOrderSummary.interface';

// refactor code
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart$ = new BehaviorSubject<IProducts[]>([]);
  private taxes = 10;

  constructor (
    private LocalStorageSvc: LocalStorageService
  ) {}

  private setBackUpShoppingCar (): void {
    const backupShoppingCar: IProducts[] = this.LocalStorageSvc.getLocalStorage('shoppingCar');
    this.shoppingCart$.next([...backupShoppingCar])
    this.LocalStorageSvc.saveLocalStorage('shoppingCar', this.shoppingCart$.getValue());
    // this.updateShoppingCart(backupShoppingCar);
  }

  public getShopCartOb$ (): Observable<IProducts[]> {
    this.setBackUpShoppingCar()
    return this.shoppingCart$.asObservable()
  }

  public updateShoppingCart (value: IProducts[]): void {
    this.shoppingCart$.next([...this.shoppingCart$.getValue(), ...value]);
    this.LocalStorageSvc.saveLocalStorage('shoppingCar', this.shoppingCart$.getValue());
  }

  public getOrderSummary (): IOrderSummary {
    const orderSummary: IOrderSummary = {
      subTotal: 0,
      taxes: 0,
      totalPrice:0,
    }

    orderSummary.subTotal = this.getSubTotal();
    orderSummary.taxes = this.taxes;
    orderSummary.totalPrice = orderSummary.subTotal + orderSummary.taxes;
    return orderSummary;
  }

  private getSubTotal (): number {
    return this.shoppingCart$.getValue().reduce((previous, current) => previous + current.price, 0);
  }
}
