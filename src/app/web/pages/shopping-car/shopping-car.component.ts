import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  service
import { ShoppingCartService } from '../../services/shoppingCart/shopping-cart.service';
//  interfaces
import { IProducts } from '../../interfaces/IProducts.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent implements OnInit, OnDestroy {
  productsList: IProducts[] = [];
  shoppingCartSub = new Subscription();

  constructor (
    private shoppingCartSvc: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.shoppingCartSub  = this.shoppingCartSvc.getShopCartOb$()
      .subscribe({
        next: (res => { this.productsList = res, console.log(res) }),
        error: (err: HttpErrorResponse) => console.log(err.message),
        complete: () => console.log('data obtain')
      });
  }

  ngOnDestroy(): void {
    this.shoppingCartSub.unsubscribe();
  }
}
