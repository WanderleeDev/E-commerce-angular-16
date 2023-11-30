import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  service
import { ShoppingCartService } from '../../services/shoppingCart/shopping-cart.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
//  interfaces
import { IProducts } from '../../interfaces/IProducts.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { IOrderSummary } from '../../interfaces/IOrderSummary.interface';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent implements OnInit, OnDestroy {
  productsList: IProducts[] = [];
  shoppingCartSub = new Subscription();
  protected orderSummary!: IOrderSummary

  constructor (
    private shoppingCartSvc: ShoppingCartService,
  ) {}

  ngOnInit(): void {
    this.shoppingCartSub  = this.shoppingCartSvc.getShopCartOb$()
      .subscribe({
        next: (res =>  {
          this.productsList = [...res],
          this.orderSummary = this.shoppingCartSvc.getOrderSummary()
        }),
        error: (err: HttpErrorResponse) => console.log(err.message),
        complete: () => console.log('data obtain')
      });
  }

  ngOnDestroy(): void {
    this.shoppingCartSub.unsubscribe();
  }
}
