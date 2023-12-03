import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//  interface
import { IProducts } from '../../interfaces/IProducts.interface';
//  services
import { CustomToastService } from '../customToast/custom-toast.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteProductsService {
  private myFavorites$ = new BehaviorSubject<IProducts[]>([]);
  private newFavoriteMessage = 'added to favorites';
  private repeatFavoriteMessage = 'removed from favorites';
  private readonly localStorageKey = 'wishlist'

  constructor (
    private storageSvc: LocalStorageService,
    private CustomToastSvc: CustomToastService
  ) {
    const backupFavorites: IProducts[] = storageSvc.getLocalStorage(this.localStorageKey);
    if (backupFavorites?.length > 0) this.updateFavorites(backupFavorites);
  }

  public getFavoriteListObservable$(): Observable<IProducts[]> {
    return this.myFavorites$.asObservable();
  }

  public toggleFavoriteProduct(fav: IProducts): void {
    const currentFavorites = this.myFavorites$.getValue();
    const isRepeatValue = currentFavorites.some((product) => product.id === fav.id);

    isRepeatValue
      ? this.removeFavorite(fav)
      : this.addFavorite(fav, currentFavorites);
  }

  private addFavorite (product: IProducts, previousFavorites: IProducts[] = []) {
    this.updateFavorites([...previousFavorites, product]);
    this.CustomToastSvc.info(`${product.title ?? 'product'} ${this.newFavoriteMessage}`);
  }

  public removeFavorite(product: IProducts): void {
    const filterFavorites = this.myFavorites$.getValue().filter((fav) =>  fav.id !== product.id);
    this.updateFavorites(filterFavorites);
    this.CustomToastSvc.warning(`${product.title ?? 'product'} ${this.repeatFavoriteMessage}`);
  }

  private updateFavorites(listFav: IProducts[]): void {
    this.myFavorites$.next(listFav);
    this.storageSvc.saveLocalStorage(this.localStorageKey, listFav);
  }

  public clearFavorites (): void {
    this.updateFavorites([]);
  }
}
