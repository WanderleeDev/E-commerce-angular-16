import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  service
import { ShoppingCartService } from '../../services/shoppingCart/shopping-cart.service';
import { OrderSummaryService } from '../../services/orderSummary/order-summary.service';
//  interfaces
import { IMyProductsCar } from '../../interfaces/IProducts.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { IOrderSummary } from '../../interfaces/IOrderSummary.interface';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent implements OnInit, OnDestroy {
  productsList: IMyProductsCar[] = [];
  shoppingCartSub = new Subscription();
  protected orderSummary!: IOrderSummary

  constructor (
    private shoppingCartSvc: ShoppingCartService,
    private orderSummarySvc: OrderSummaryService,
  ) {}

  ngOnInit(): void {
    this.shoppingCartSub = this.shoppingCartSvc.getShopCartOb$()
      .subscribe({
        next: (res =>  {
          this.productsList = [...res],
          this.orderSummary = this.orderSummarySvc.getOrderSummary()
        }),
        error: (err: HttpErrorResponse) => console.log(err.message),
        complete: () => console.log('data obtain')
      });
  }

  ngOnDestroy(): void {
    this.shoppingCartSub.unsubscribe();
  }
}
