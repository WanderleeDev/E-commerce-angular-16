import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../shoppingCart/shopping-cart.service';
import { IOrderSummary } from '../../interfaces/IOrderSummary.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {
  private readonly taxes = 10;

  constructor(private shoppingCartSvc: ShoppingCartService) {}

  public getOrderSummary (): IOrderSummary {
    const orderSummary: IOrderSummary = {
      subTotal: 0,
      taxes: 0,
      totalPrice: 0,
    };

    orderSummary.subTotal = this.getSubTotal();
    orderSummary.taxes = this.taxes;
    orderSummary.totalPrice = orderSummary.subTotal + orderSummary.taxes;
    return orderSummary;
  }

  private getSubTotal (): number {
    return this.shoppingCartSvc.getPresentValue()
      .reduce((previous, current) => previous + current.price * current.quantity, 0);
  }
}
