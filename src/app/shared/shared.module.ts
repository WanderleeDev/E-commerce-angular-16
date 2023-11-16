import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { BtnBaseComponent } from './components/btn-base/btn-base.component';
import { SlantedTagComponent } from './components/slanted-tag/slanted-tag.component';
import { ImgItemComponent } from './components/card/components/img-item/img-item.component';
import { DetailsComponent } from './components/card/components/details/details.component';
import { BtnShopComponent } from './components/card/components/btn-shop/btn-shop.component';
import { HeadingComponent } from './components/heading/heading.component';



@NgModule({
  declarations: [
    CardComponent,
    BtnBaseComponent,
    SlantedTagComponent,
    ImgItemComponent,
    DetailsComponent,
    BtnShopComponent,
    HeadingComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    CardComponent,
    BtnBaseComponent,
    SlantedTagComponent,
    HeadingComponent
  ]
})
export class SharedModule { }
