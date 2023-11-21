import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpProductsService } from '../../services/HttpProducts/http-products.service';
import { IProducts } from '../../interfaces/IProducts.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: []
})
export class CategoryComponent implements OnInit, OnDestroy {
  protected categoryName = 'loading...';
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
  //  obtiene las categorías disponibles y ejecuta loadProducts
  private loadCategories(): void {
    this.httpProductsSvc.getCategories().subscribe(categories => {
      //  guarda la lista de categorías para su posterior uso
      const listCategories: string[] = categories;
      this.loadProducts(listCategories);
    });
  }

  //  obtiene la lista de productos en base a un parámetro obtenido de la url
  private loadProducts(listCategories: string[]): void {
    //  obtención del parámetro de la url
    this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        //  guarda el parámetro
        const category: string | null = params.get('category');

        //  si category no es null y su valor esta incluido el la lista de categorías obtenidas
        if (category && listCategories.includes(category)) {
          //  categoryName pasa a tener el valor de la categoría actual
          this.categoryName = category;

          //  retorna un observable para la categoría obtenida
          return this.httpProductsSvc.getProductsForCategory(category);
        } else {
          //  categoryName tendrá el valor All Products
          this.categoryName = 'all products'

          // retorna un observable para obtener todos los productos
          return this.httpProductsSvc.getAllProducts();
        }
      })
    //  procede a suscribirse al observable retornado
    ).subscribe({
      next: (res) => {
        res && (this.products = res)
      },
      error: (err) => console.log(err),
      complete: () => console.log('product obtain')
    });
  }
}
