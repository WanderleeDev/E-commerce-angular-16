import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
//  interface
import { IRequestProducts, IProducts } from '../../interfaces/IProducts.interface';
//  services
import { CustomHttpErrorService } from 'src/app/services/CustomHttpError/custom-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpProductsService {
  private readonly BASEURL = 'https://dummyjson.com/products'

  constructor(
    private http: HttpClient,
    private customError: CustomHttpErrorService
  ) { }

  //  obtiene la lista entera de productos
  public getAllProducts (limit?: number, skip?: number): Observable<IRequestProducts> {
    let params =  new HttpParams();
    if (limit !== undefined && skip !== undefined) {
      params = params.set('limit', limit);
      params = params.set('skip', skip);
    }

    return this.http.get<IRequestProducts>(this.BASEURL, { params }).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.customError.handleCustomHttpError(error)
      }))
  }

  //  obtiene la lista de categorías
  public getCategories (): Observable<string[]> {
    return this.http.get<string[]>(`${this.BASEURL}/categories`).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.customError.handleCustomHttpError(error)
      }))
  }

  //  obtiene la lista de productos por la categoría especificada
  public getProductsForCategory (category: string):Observable<IRequestProducts> {
    return this.http.get<IRequestProducts>(`${this.BASEURL}/category/${category}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.customError.handleCustomHttpError(error);
    }))
  }

  //  obtiene un producto por id
  public getSingleProduct (id: string) {
    return this.http.get<IProducts>(`${this.BASEURL}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.customError.handleCustomHttpError(error);
      }))
  }
}
