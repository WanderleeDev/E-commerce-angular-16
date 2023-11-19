import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';

//  services
import { HttpProductsService } from '../../services/HttpProducts/http-products.service';
import { IProducts } from '../../interfaces/IProducts.interface';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit{
  singleProduct?: IProducts;
  productName = 'loading ...';

  constructor (
    private activateRoute: ActivatedRoute,
    private httpProductsSvc: HttpProductsService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.pipe(
      switchMap(params => {
        const urlParam: string | null = params.get('product');

        return urlParam
          ? this.httpProductsSvc.getSingleProduct(urlParam)
          : of(null)
      })
    ).subscribe(res => {
      !!res && (
        this.productName = res.title ?? 'no data',
        this.singleProduct = res
      )}
    )}
}
