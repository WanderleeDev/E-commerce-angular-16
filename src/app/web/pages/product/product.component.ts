import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { IProducts } from '../../interfaces/IProducts.interface';
//  services
import { HttpProductsService } from '../../services/HttpProducts/http-products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: []
})
export class ProductComponent implements OnInit {
  protected categoryName = '';
  protected products: IProducts[] = [];

  constructor (
    private  activatedRoute: ActivatedRoute,
    private httpProductsSvc: HttpProductsService
  ) {}

    ngOnInit(): void {
      this.activatedRoute.paramMap.pipe(
        switchMap( params => {
          const category = params.get('category');
          if (category) {
            this.categoryName = category;
            return this.httpProductsSvc.getProductsForCategory(category)
          } else {
            return of(null)
          }
        })
      )
      .subscribe({
          next: (res) => {
            !!res && (this.products = res?.products)
          },
          error: (err) => console.log(err),
          complete: () => console.log('product obtain')
      })
    }
}
