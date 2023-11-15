import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from 'src/app/web/interfaces/IProducts.interface';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input({required: true}) product!: IProducts;
  previousPrice!: number;

  ngOnInit(): void {
    this.previousPrice = parseFloat(
      (this.product.price / (1 - (this.product.discountPercentage / 100))).toFixed(2)
    );
  }
}
