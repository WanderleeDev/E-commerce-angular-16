import { Component, Input } from '@angular/core';
//  interface
import { IProducts } from 'src/app/web/interfaces/IProducts.interface';
//  services
import { ImageErrorService } from 'src/app/web/services/ImageError/image-error.service';
import { FavoriteProductsService } from 'src/app/web/services/favoriteProducts/favorite-products.service';

@Component({
  selector: 'app-img-item',
  templateUrl: './img-item.component.html',
  styleUrls: ['./img-item.component.scss']
})
export class ImgItemComponent {
  @Input({required: true}) product!: IProducts;
  protected hasFavoriteProduct = false;

  constructor (
    private imageErrorSvc: ImageErrorService,
    private favoriteProductsSvc: FavoriteProductsService,
  ) {}

  public errorImgHandler (e: Event): void {
    this.imageErrorSvc.errorImageLoaded(e);
  }

  public favoriteHandler (): void {
    this.favoriteProductsSvc.toggleFavoriteProduct(this.product);
    this.hasFavoriteProduct = !this.hasFavoriteProduct;
  }
}
