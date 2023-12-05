import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './category-routing.module';

import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
//  modules


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class CategoryModule { }
