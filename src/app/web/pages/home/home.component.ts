import { Component, OnInit } from '@angular/core';
//  services
import { HttpProductsService } from '../../services/HttpProducts/http-products.service';
//  interface
import { IProducts } from '../../interfaces/IProducts.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProducts[] = [];

  constructor (
    private httpProductsSvc: HttpProductsService
  ) {}

  ngOnInit(): void {
    this.httpProductsSvc.getAllProducts()
      .subscribe(res => {
        this.products = res.products
        console.log(res)
      })
  }
}


