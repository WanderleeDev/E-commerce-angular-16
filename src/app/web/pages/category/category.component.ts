import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
//  services
import { HttpProductsService } from '../../services/HttpProducts/http-products.service';
// interfaces
import { IProducts } from '../../interfaces/IProducts.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: [],
})
export class CategoryComponent implements OnInit {
  private limit = 10;
  private skip = 0;
  private total!: number;
  protected categoryName = 'loading...';
  private listCategories:string[] = [];
  listProducts:IProducts[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpProductsSvc: HttpProductsService,
  ) {}

  ngOnInit(): void {
    this.total = 0;
    this.loadCategories();
  }

  private loadCategories(): void {
    this.httpProductsSvc.getCategories().subscribe((categories) => {
      this.listCategories = categories;
      this.loadProducts(this.listCategories);
    });
  }

  private loadProducts(listCategories: string[]): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const category: string | null = params.get('category');

        return (category && listCategories.includes(category))
          ? (this.categoryName = category,
            this.httpProductsSvc.getProductsForCategory(category))
          : (this.categoryName = 'all products',
            this.httpProductsSvc.getAllProducts(this.limit, this.skip))
      })
    ).pipe(take(1))
    .subscribe({
      next: (res) => {
        this.total = res.total;
        this.listProducts = [...this.listProducts, ...res.products]
      },
      error: (err: HttpErrorResponse) => console.error(err.message),
      complete: () => console.log('complete')
    })
  }

  public onScroll(): void {
    if (this.limit >= this.total) return
    this.skip += 10;
    this.loadProducts(this.listCategories);
  }
}
