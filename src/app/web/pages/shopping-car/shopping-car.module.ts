import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ShoppingCarRoutingModule } from './shopping-car-routing.module';
import { ShoppingCarComponent } from './shopping-car.component';
import { BoxTotalPriceComponent } from './components/box-total-price/box-total-price.component';
import { SharedModule } from "../../../shared/shared.module";
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { QuantityCounterComponent } from './components/quantity-counter/quantity-counter.component';


@NgModule({
    declarations: [
        ShoppingCarComponent,
        BoxTotalPriceComponent,
        ShoppingCartItemComponent,
        QuantityCounterComponent
    ],
    imports: [
        CommonModule,
        ShoppingCarRoutingModule,
        NgOptimizedImage,
        SharedModule
    ]
})
export class ShoppingCarModule { }
