import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './category-routing.module';

import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/shared.module';
//  modules


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
