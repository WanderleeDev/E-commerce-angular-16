import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { catchError, map, take } from 'rxjs';
import { HttpProductsService } from 'src/app/web/services/HttpProducts/http-products.service';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss']
})
export class RecommendedProductsComponent implements OnInit {
  @Input() listImages:string[] = [];
  @Input() category!: string;

  constructor (
    private httpProductsSvc: HttpProductsService
  ) {}

  ngOnInit(): void {
    !!(this.listImages.length <= 0 && this.category)
      && this.getThumbnails()
  }

  public getThumbnails (): void {
    this.httpProductsSvc.getProductsForCategory(this.category)
      .pipe(
        take(1),
        map(res => res.products.map(product => product.thumbnail)),
        catchError((err: HttpErrorResponse) => {
          console.log(err.message);
          return []
        })
      )
      .subscribe(res => {
        this.listImages = res;
        console.log(res)
      })
  }
}
