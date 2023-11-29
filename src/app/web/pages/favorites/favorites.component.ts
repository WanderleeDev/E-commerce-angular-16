import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
//  interface
import { IProducts } from '../../interfaces/IProducts.interface';
//  services
import { FavoriteProductsService } from '../../services/favoriteProducts/favorite-products.service';
import { ShoppingCartService } from '../../services/shoppingCart/shopping-cart.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  wishlist: IProducts[] = [];
  private subscriptionFav = new Subscription();

  constructor (
    private favoriteSvc: FavoriteProductsService,
    private shoppingCartSvc: ShoppingCartService,
    private LocalStorageSvc: LocalStorageService
  ) {}


  ngOnInit(): void {
    this.subscriptionFav = this.favoriteSvc.getFavOb$()
    .subscribe({
      next: (fav) => this.wishlist = fav,
      error: (err : HttpErrorResponse) => console.error(err.message)
    });
  }

  ngOnDestroy(): void {
    this.subscriptionFav.unsubscribe();
  }

  public removeItem(id: number): void {
    this.favoriteSvc.removeFavorite(id);
  }

  public addShoppingCart (products: IProducts[]): void {
    this.shoppingCartSvc.updateShoppingCart(products);
    this.LocalStorageSvc.saveLocalStorage('shoppingCar', products)
    this.favoriteSvc.clearFavorites()
    this.LocalStorageSvc.removeLocalBackup('wishlist')
  }
}
