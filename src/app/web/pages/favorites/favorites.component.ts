import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
//  interface
import { IMyProductsCar, IProducts } from '../../interfaces/IProducts.interface';
//  services
import { FavoriteProductsService } from '../../services/favoriteProducts/favorite-products.service';
import { ShoppingCartService } from '../../services/shoppingCart/shopping-cart.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  wishlist: IProducts[] = [];
  private subscriptionFav = new Subscription();

  constructor(
    private favoriteSvc: FavoriteProductsService,
    private shoppingCartSvc: ShoppingCartService,
    private LocalStorageSvc: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.subscriptionFav = this.favoriteSvc.getFavoriteListObservable$().subscribe({
      next: (fav) => (this.wishlist = fav),
      error: (err: HttpErrorResponse) => console.error(err.message),
    });
  }

  ngOnDestroy(): void {
    this.subscriptionFav.unsubscribe();
  }

  public removeItem(product: IProducts): void {
    this.favoriteSvc.removeFavorite(product);
  }

  public addShoppingCart(products: IProducts[]): void {
    const myProductDto: IMyProductsCar[] = products.map(({ images, stock, ...product }) => ({ ...product, quantity: 1 }))
    this.shoppingCartSvc.updateShoppingCart(myProductDto);
    // this.LocalStorageSvc.saveLocalStorage('shoppingCar', myProductDto);
    this.favoriteSvc.clearFavorites();
  }
}
