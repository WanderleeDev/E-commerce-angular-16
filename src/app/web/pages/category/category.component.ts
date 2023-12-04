import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpProductsService } from '../../services/HttpProducts/http-products.service';
import { IProducts } from '../../interfaces/IProducts.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: [],
})
export class CategoryComponent implements OnInit {
  protected categoryName = 'loading...';
  protected products$!: Observable<IProducts[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpProductsSvc: HttpProductsService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.httpProductsSvc.getCategories().subscribe((categories) => {
      const listCategories: string[] = categories;
      this.loadProducts(listCategories);
    });
  }

  private loadProducts(listCategories: string[]): void {
    this.products$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const category: string | null = params.get('category');

        if (category && listCategories.includes(category)) {
          this.categoryName = category;
          return this.httpProductsSvc.getProductsForCategory(category);
        } else {
          this.categoryName = 'all products';
          return this.httpProductsSvc.getAllProducts();
        }
      })
    );
  }
}
