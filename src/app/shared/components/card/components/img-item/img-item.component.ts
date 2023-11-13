import { Component, Input } from '@angular/core';
import { IProducts } from 'src/app/web/interfaces/IProducts.interface';
import { ImageErrorService } from 'src/app/web/services/ImageError/image-error.service';

@Component({
  selector: 'app-img-item',
  templateUrl: './img-item.component.html',
  styleUrls: ['./img-item.component.scss']
})
export class ImgItemComponent {
  @Input({required: true}) product!: IProducts;

  constructor (
    private imageErrorSvc: ImageErrorService
  ) {}

  public errorImgHandler (e: Event): void {
    this.imageErrorSvc.errorImageLoaded(e)
  }
}
