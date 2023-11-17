import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { BtnBaseComponent } from './components/btn-base/btn-base.component';
import { SlantedTagComponent } from './components/slanted-tag/slanted-tag.component';
import { ImgItemComponent } from './components/card/components/img-item/img-item.component';
import { DetailsComponent } from './components/card/components/details/details.component';
import { BtnShopComponent } from './components/card/components/btn-shop/btn-shop.component';
import { BarsIconComponent } from './components/bars-icon/bars-icon.component';
import { MicrophoneIconComponent } from './components/microphone-icon/microphone-icon.component';
import { HeartIconComponent } from './components/heart-icon/heart-icon.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PipesModule } from "../pipes/pipes.module";
import { EmptyShoppingCartComponent } from './components/empty-shopping-cart/empty-shopping-cart.component';
import { HeadingComponent } from './components/heading/heading.component';
import { MonochromeBtnComponent } from './components/monochrome-btn/monochrome-btn.component';
import { GradientBtnComponent } from './components/gradient-btn/gradient-btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        CardComponent,
        BtnBaseComponent,
        SlantedTagComponent,
        ImgItemComponent,
        DetailsComponent,
        BtnShopComponent,
        BarsIconComponent,
        MicrophoneIconComponent,
        HeartIconComponent,
        GalleryComponent,
        EmptyShoppingCartComponent,
        HeadingComponent,
        MonochromeBtnComponent,
        GradientBtnComponent
    ],
    exports: [
        CardComponent,
        BtnBaseComponent,
        SlantedTagComponent,
        BarsIconComponent,
        MicrophoneIconComponent,
        HeartIconComponent,
        GalleryComponent,
        EmptyShoppingCartComponent,
        HeadingComponent,
        MonochromeBtnComponent,
        GradientBtnComponent
    ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        PipesModule,
        RouterModule
    ]
})
export class SharedModule { }
