import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//  interface
import { IProducts } from '../../interfaces/IProducts.interface';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class FavoriteProductsService {
  private myFavorites$ = new BehaviorSubject<IProducts[]>([]);
  private newFavoriteMessage = 'product added to favorites';
  private repeatFavoriteMessage = 'removed from favorites';

  constructor (
    private storageSvc: LocalStorageService,
    private toastrSvc: ToastrService
  ) {
    const backupFavorites: IProducts[] | null = storageSvc.getLocalStorage('wishlist')
    if (backupFavorites) this.updateFavorites(backupFavorites)
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
    const newFavorites = [...previousFavorites, product]
    this.updateFavorites(newFavorites)
    this.toastrSvc.success(`${product.title ?? 'product'} ${this.newFavoriteMessage}`)
  }

  public removeFavorite(product: IProducts): void {
    const filterFavorites = this.myFavorites$.getValue().filter((fav) =>  fav.id !== product.id);
    this.updateFavorites(filterFavorites);
    this.toastrSvc.error(`${product.title ?? 'product'} ${this.repeatFavoriteMessage}`)
  }

  private updateFavorites(listFav: IProducts[]): void {
    this.myFavorites$.next(listFav);
    this.storageSvc.saveLocalStorage('wishlist', listFav);
  }

  public clearFavorites (): void {
    this.myFavorites$.next([]);
    this.storageSvc.removeLocalBackup('wishlist');
  }
}
