import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { NgOptimizedImage } from '@angular/common';

import { ProductComponent } from './product.component';
//  modules
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class ProductModule { }
