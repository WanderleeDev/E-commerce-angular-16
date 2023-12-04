import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//  interface
import { IMyProductsCar, IProducts } from '../../interfaces/IProducts.interface';
// services
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { CustomToastService } from '../customToast/custom-toast.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart$ = new BehaviorSubject<IMyProductsCar[]>([]);
  private maxStock = 10;
  private readonly localStorageKey = 'shoppingCar';
  private newProductMessage = 'products added to shopping cart';
  private removeProductMessage = 'removed from shopping cart';

  constructor(
    private localStorageSvc: LocalStorageService,
    // private CustomToastSvc: CustomToastService
  ) {
    this.shoppingCart$.next(this.localStorageSvc.getLocalStorage(this.localStorageKey));
  }

  public getPresentValue (): IMyProductsCar[] {
    return [...this.shoppingCart$.getValue()];
  }

  public getShopCartOb$ (): Observable<IMyProductsCar[]> {
    return this.shoppingCart$.asObservable();
  }

  public updateShoppingCart (newProducts: IMyProductsCar[]): void {
    const myProducts =this.unifyMyProducts(this.getPresentValue(), newProducts)

    this.shoppingCart$.next(myProducts);
    // this.CustomToastSvc.success(`${newProducts.length} ${this.newProductMessage}`);
    this.localStorageSvc.saveLocalStorage('shoppingCar', myProducts);
  }

  private unifyMyProducts (currentProducts: IMyProductsCar[], newProducts: IMyProductsCar[]): IMyProductsCar[] {
    const unifiedProducts =  currentProducts.map(prevProduct => {
      const matchingProducts = newProducts.filter(newProduct => newProduct.title.toLowerCase() === prevProduct.title.toLowerCase());

      return matchingProducts.length > 0
      ? { ...prevProduct,
          quantity: prevProduct.quantity + matchingProducts.reduce((prev, curr) => prev + curr.quantity, 0) }
      : { ...prevProduct }
    });

    const newProductsNotInPrevious = newProducts.filter((nuevoProducto) => {
      return !unifiedProducts.some((productoAnterior) => nuevoProducto.title.toLowerCase() === productoAnterior.title.toLowerCase());
    });

    return [...unifiedProducts,...newProductsNotInPrevious];
  }

  public removeProduct (id: number, title: string):void {
    const newValue = this.getPresentValue().filter(product => product.id !== id);

    this.shoppingCart$.next(newValue);
    this.localStorageSvc.saveLocalStorage('shoppingCar', newValue);
    // this.CustomToastSvc.error(`${ title } ${ this.removeProductMessage }`);
  }

  public incrementProduct (id: number): void {
    const newValue = this.getPresentValue().map(prevProduct => {
      return  prevProduct.id === id && prevProduct.quantity < this.maxStock
        ? { ...prevProduct, quantity: prevProduct.quantity + 1 }
        : { ...prevProduct }
    });

    this.shoppingCart$.next(newValue);
    this.localStorageSvc.saveLocalStorage('shoppingCar', [...newValue]);
  }

  public decrementProduct (id: number): void {
    const isSingleProduct = this.getPresentValue().some(prevProduct => prevProduct.id === id && prevProduct.quantity > 1);

    if (!isSingleProduct) return

    const newValue = this.shoppingCart$.getValue().map(prevProduct => {
      return prevProduct.id === id && prevProduct.quantity > 1
        ? { ...prevProduct, quantity: prevProduct.quantity - 1  }
        : { ...prevProduct }
    });

    this.shoppingCart$.next(newValue);
    this.localStorageSvc.saveLocalStorage('shoppingCar', [...newValue]);
  }

  public addShoppingCart(products: IProducts[]): void {
    const myProductDto: IMyProductsCar[] = products.map(({ images, stock, ...product }) => ({ ...product, quantity: 1 }));
    this.updateShoppingCart(myProductDto);
  }
}
