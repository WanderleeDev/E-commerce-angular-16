import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateOriginalPricePipe } from './calculateOriginalPrice/calculate-original-price.pipe';
import { FilterPipe } from './filter/filter.pipe';
import { ReplaceAllPipe } from './replaceAll/replace-all.pipe';



@NgModule({
  declarations: [
    CalculateOriginalPricePipe,
    FilterPipe,
    ReplaceAllPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CalculateOriginalPricePipe,
    FilterPipe,
    ReplaceAllPipe
  ]
})
export class PipesModule { }
