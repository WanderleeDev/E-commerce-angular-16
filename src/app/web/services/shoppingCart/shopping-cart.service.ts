import { Injectable } from '@angular/core';
//  interface
import { IProducts } from '../../interfaces/IProducts.interface';
import { BehaviorSubject, Observable } from 'rxjs';

import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart$ = new BehaviorSubject<IProducts[]>([]);

  constructor (
    private LocalStorageSvc: LocalStorageService
  ) {
    console.log('ini');

    const backupShoppingCar: IProducts[] = this.LocalStorageSvc.getLocalStorage('shoppingCar');
    this.updateShoppingCart(backupShoppingCar);
  }

  public getShopCartOb$ (): Observable<IProducts[]> {
    return this.shoppingCart$.asObservable()
  }

  public updateShoppingCart (value: IProducts[]): void {
    this.shoppingCart$.next([...this.shoppingCart$.getValue(), ...value]);
    this.LocalStorageSvc.saveLocalStorage('shoppingCar', this.shoppingCart$.getValue());
  }
}
