import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//  interface
import { IProducts } from '../../interfaces/IProducts.interface';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteProductsService {
  private myFavorites$ = new BehaviorSubject<IProducts[]>([]);

  constructor (
    private storage: LocalStorageService
  ) {
    //  obtiene la primera vez la data del locaStorage si hubiera y actualiza el Subject
    const backup: IProducts[] | null = storage.getLocalStorage('wishlist')
    if (backup) this.updateFavorites(backup)
  }

  // Retorna un observable de la  lista de favoritos
  public getFavOb$(): Observable<IProducts[]> {
    return this.myFavorites$.asObservable();
  }

  //  Obtiene la lista actual de favoritos
  public getFavorites(): IProducts[] {
    return this.myFavorites$.getValue();
  }

  //  agrega un producto a favoritos si siempre y cuando no este repetido
  public addFavorite(fav: IProducts): void {
    const currentFavorites = this.myFavorites$.getValue();
    const isRepeatValue = currentFavorites.some((product) => {
      return product.id === fav.id;
    });

    !isRepeatValue && this.updateFavorites([...currentFavorites, fav]);
  }

  //  retira un producto de favorito
  public removeFavorite(id: number): void {
    const newFavorites = this.myFavorites$.getValue().filter((fav) => {
      return fav.id !== id;
    });
    this.updateFavorites(newFavorites);
  }

  //  actualiza el valor de lista de favoritos
  private updateFavorites(listFav: IProducts[]): void {
    this.myFavorites$.next(listFav);
    this.storage.saveLocalStorage('wishlist', listFav);
  }

  //  limpia la lista de favoritos
  public clearFavorites (): void {
    this.myFavorites$.next([]);
  }
}
