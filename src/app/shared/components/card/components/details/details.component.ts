import { Component, Input } from '@angular/core';
import { IProducts } from 'src/app/web/interfaces/IProducts.interface';
//  services
import { ShoppingCartService } from 'src/app/web/services/shoppingCart/shopping-cart.service';
import { CustomToastService } from 'src/app/web/services/customToast/custom-toast.service';
import { MessageType } from 'src/app/helpers/toastr.config';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent {
  @Input({required: true}) product!: IProducts;

  constructor (
    private shoppingCartSvc: ShoppingCartService,
    private toastSvc: CustomToastService,
  ) {}

  public addToCart (): void {
    this.shoppingCartSvc.addShoppingCart([this.product]);
    this.toastSvc.success(`${this.product.title} ${MessageType.AddedToShoppingCart}`);
  }
}
