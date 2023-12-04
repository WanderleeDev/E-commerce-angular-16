import { IndividualConfig } from "ngx-toastr";

export const configToastr: Partial<IndividualConfig> = {
  closeButton: true,
  progressAnimation: 'increasing',
  timeOut: 2000,
  progressBar: true,
  positionClass: 'toast-bottom-right',
  tapToDismiss: true,
};

export enum MessageType {
  AddToWishlist = 'add to wishlist',
  RemoveToWishlist = 'remove from wishlist',
  ProductsAddedToWishlist = 'products added to wishlist',
  AddedToShoppingCart = 'added to shopping cart',
  ProductsAddedToShoppingCart = 'added to the shopping cart',
}
