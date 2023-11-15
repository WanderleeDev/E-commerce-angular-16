import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpProductsService } from '../../services/HttpProducts/http-products.service';
import { Subscription } from 'rxjs';
import { IProducts } from '../../interfaces/IProducts.interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: []
})
export class AllProductsComponent implements OnInit, OnDestroy {
  listProducts: IProducts[] = [];
  allProductsSub: Subscription = new Subscription();

  constructor (
    private httpProductsSvc: HttpProductsService
  ) {}

  ngOnInit(): void {
    this.allProductsSub = this.httpProductsSvc.getAllProducts()
      .subscribe(res => this.listProducts = res.products);
  }

  ngOnDestroy(): void {
    this.allProductsSub.unsubscribe();
    console.log(this.allProductsSub);
  }
}
