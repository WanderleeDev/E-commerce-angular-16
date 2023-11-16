import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateOriginalPricePipe } from './pipes/calculateOriginalPrice/calculate-original-price.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';



@NgModule({
  declarations: [
    CalculateOriginalPricePipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CalculateOriginalPricePipe,
    FilterPipe
  ]
})
export class PipesModule { }
