import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//  interface
import { IOrderSummary } from '../../interfaces/IOrderSummary.interface';
import { IMyProductsCar } from '../../interfaces/IProducts.interface';
// services
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { CustomToastService } from '../customToast/custom-toast.service';


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
    private localStorageSvc: LocalStorageService,
    private CustomToastSvc: CustomToastService
  ) {
    this.shoppingCart$.next(this.localStorageSvc.getLocalStorage(this.localStorageKey));
  }

  public getShopCartOb$ (): Observable<IMyProductsCar[]> {
    return this.shoppingCart$.asObservable();
  }

  public updateShoppingCart (newProducts: IMyProductsCar[]): void {
    const myProducts =this.unifyMyProducts(this.shoppingCart$.getValue(),newProducts)

    this.shoppingCart$.next(myProducts);
    this.CustomToastSvc.success(`${newProducts.length} ${this.newProductMessage}`);
    this.localStorageSvc.saveLocalStorage('shoppingCar', this.shoppingCart$.getValue());
  }

  private unifyMyProducts (currentProducts: IMyProductsCar[], newProducts: IMyProductsCar[]): IMyProductsCar[] {
    const unifiedProducts =  currentProducts.map(prevProduct => {
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

  public getOrderSummary (): IOrderSummary {
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

  private getSubTotal (): number {
    return this.shoppingCart$
      .getValue()
      .reduce((previous, current) => previous + current.price * current.quantity, 0);
  }

  public removeProduct (id: number, title: string):void {
    this.shoppingCart$.next(
      this.shoppingCart$.getValue().filter(product => product.id !== id)
    );
    this.localStorageSvc.saveLocalStorage('shoppingCar', this.shoppingCart$.getValue());
    this.CustomToastSvc.error(`${title} ${this.removeProductMessage}`);
  }

  // public incrementProduct (product: IMyProductsCar): void {

  // }
}
