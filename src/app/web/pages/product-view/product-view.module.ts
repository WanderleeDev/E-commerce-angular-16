import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductViewRoutingModule } from './product-view-routing.module';
import { ProductViewComponent } from './product-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductViewRoutingModule,
    SharedModule
  ]
})
export class ProductViewModule { }
