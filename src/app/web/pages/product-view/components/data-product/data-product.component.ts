import { Component, Input } from '@angular/core';
import { IProducts } from 'src/app/web/interfaces/IProducts.interface';
//  services
import { ShoppingCartService } from 'src/app/web/services/shoppingCart/shopping-cart.service';
import { CustomToastService } from 'src/app/web/services/customToast/custom-toast.service';
import { MessageType } from 'src/app/helpers/toastr.config';

@Component({
  selector: 'app-data-product',
  templateUrl: './data-product.component.html',
  styleUrls: ['./data-product.component.scss']
})
export class DataProductComponent {
  @Input({ required: true }) data!: IProducts;

  constructor(
    private shoppingCartSvc: ShoppingCartService,
    private toastSvc: CustomToastService,
  ){}

  public addToCart (): void {
    this.shoppingCartSvc.addShoppingCart([this.data]);
    this.toastSvc.success(`${this.data.title} ${MessageType.AddedToShoppingCart}`);
  }
}
