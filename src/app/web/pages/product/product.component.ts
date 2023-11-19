import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpProductsService } from '../../services/HttpProducts/http-products.service';
import { IProducts } from '../../interfaces/IProducts.interface';

enum pa {
  'all product',
  string
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: []
})
export class ProductComponent implements OnInit, OnDestroy {
  dar: pa.string = pa.string
  protected categoryName = 'loading..';
  protected products: IProducts[] = [];
  private productSub: Subscription = new Subscription();

  constructor (
    private activatedRoute: ActivatedRoute,
    private httpProductsSvc: HttpProductsService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }

  private loadCategories(): void {
    this.httpProductsSvc.getCategories().subscribe(categories => {
      const listCategories: string[] = categories;
      this.loadProducts(listCategories);
    });
  }

  private loadProducts(listCategories: string[]): void {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        const category = params.get('category');
        if (category && listCategories.includes(category)) {
          this.categoryName = category;
          return this.httpProductsSvc.getProductsForCategory(category);
        } else {
          this.categoryName = 'all products'
          return this.httpProductsSvc.getAllProducts();
        }
      })
    ).subscribe({
      next: (res) => {
        !!res && (this.products = res?.products)
      },
      error: (err) => console.log(err),
      complete: () => console.log('product obtain')
    });
  }
}
