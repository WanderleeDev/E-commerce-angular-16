import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
//  interface
import { IProducts } from '../../interfaces/IProducts.interface';
//  services
import { FavoriteProductsService } from '../../services/favoriteProducts/favorite-products.service';
import { ShoppingCartService } from '../../services/shoppingCart/shopping-cart.service';
import { CustomToastService } from '../../services/customToast/custom-toast.service';
//  messages
import { MessageType } from 'src/app/helpers/toastr.config';

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
    private toastSvc: CustomToastService,
  ) {}

  ngOnInit (): void {
    this.subscriptionFav = this.favoriteSvc.getFavoriteListObservable$().subscribe({
      next: (fav) => (this.wishlist = fav),
      error: (err: HttpErrorResponse) => console.error(err.message),
    });
  }

  ngOnDestroy (): void {
    this.subscriptionFav.unsubscribe();
  }

  public removeItem (product: IProducts): void {
    this.favoriteSvc.removeFavorite(product);
  }

  public addShoppingCart (): void {
    const productOrProducts = this.wishlist.length > 1 ? 'products' : 'product';
    this.shoppingCartSvc.addShoppingCart(this.wishlist);
    this.toastSvc.success(`${this.wishlist.length} ${productOrProducts} ${MessageType.AddedToShoppingCart}`);
    this.favoriteSvc.clearFavorites();
  }

}
