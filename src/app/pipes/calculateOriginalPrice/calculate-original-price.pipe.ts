import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateOriginalPrice'
})
export class CalculateOriginalPricePipe implements PipeTransform {

  transform(finalPrice: number, discountPercentage: number): number {
    const originalPrice = finalPrice / (1 - ( discountPercentage / 100));
    return parseFloat(originalPrice.toFixed(2))
  }

}
