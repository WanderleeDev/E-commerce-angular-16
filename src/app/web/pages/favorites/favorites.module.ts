import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
    declarations: [
        FavoritesComponent
    ],
    imports: [
        CommonModule,
        FavoritesRoutingModule,
        SharedModule,
        NgOptimizedImage
    ]
})
export class FavoritesModule { }
