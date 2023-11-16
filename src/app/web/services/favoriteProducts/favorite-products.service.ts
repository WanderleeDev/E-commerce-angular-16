import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//  interface
import { IProducts } from '../../interfaces/IProducts.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoriteProductsService {
  private myFavorites$ = new BehaviorSubject<IProducts[]>([]);

  public getFavorites (): IProducts[] {
    return this.myFavorites$.getValue()
  }

  public addFavorite(fav: IProducts): void {
    const currentFavorites = this.myFavorites$.getValue();

    const isRepeatValue = currentFavorites.some(product => {
      return product.id === fav.id;
    })

    if (!isRepeatValue) {
      this.myFavorites$.next([...currentFavorites, fav]);
    }
  }
}
