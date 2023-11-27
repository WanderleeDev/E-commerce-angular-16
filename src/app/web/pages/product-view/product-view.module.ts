import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProductViewRoutingModule } from './product-view-routing.module';
import { ProductViewComponent } from './product-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CommentsBoxComponent } from './components/comments-box/comments-box.component';
import { DataProductComponent } from './components/data-product/data-product.component';
import { RecommendedProductsComponent } from './components/recommended-products/recommended-products.component';


@NgModule({
    declarations: [
        ProductViewComponent,
        CommentsBoxComponent,
        DataProductComponent,
        RecommendedProductsComponent
    ],
    imports: [
        CommonModule,
        ProductViewRoutingModule,
        NgOptimizedImage,
        PipesModule,
        SharedModule
    ]
})
export class ProductViewModule { }
