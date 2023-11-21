import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

import { CardComponent } from './components/card/card.component';
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
import { ScrollToButtonComponent } from './components/scroll-to-button/scroll-to-button.component';
import { PricePanelComponent } from './components/card/components/price-panel/price-panel.component';
import { RatingComponent } from './components/card/components/rating/rating.component';
import { SliderComponent } from './components/slider/slider.component';



@NgModule({
    declarations: [
        CardComponent,
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
        GradientBtnComponent,
        ScrollToButtonComponent,
        PricePanelComponent,
        RatingComponent,
        SliderComponent,
    ],
    exports: [
        CardComponent,
        SlantedTagComponent,
        BarsIconComponent,
        MicrophoneIconComponent,
        HeartIconComponent,
        GalleryComponent,
        EmptyShoppingCartComponent,
        HeadingComponent,
        MonochromeBtnComponent,
        GradientBtnComponent,
        ScrollToButtonComponent,
        PricePanelComponent,
        RatingComponent,
        SliderComponent,
        BtnShopComponent
    ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        PipesModule,
        RouterModule,
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
