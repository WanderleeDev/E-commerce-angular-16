import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
//  interface
import { IRequestProducts } from '../../interfaces/IProducts.interface';
//  services
import { CustomHttpErrorService } from 'src/app/shared/services/CustomHttpError/custom-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpProductsService {
  private readonly BASEURL = 'https://dummyjson.com/products'
//categories
  constructor(
    private http: HttpClient,
    private customError: CustomHttpErrorService
  ) { }

  public getAllProducts (): Observable<IRequestProducts> {
    return this.http.get<IRequestProducts>(this.BASEURL).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.customError.handleCustomHttpError(error)
      })
    )
  }

  public getCategories (): Observable<string[]> {
    return this.http.get<string[]>(`${this.BASEURL}/categories`).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.customError.handleCustomHttpError(error)
      })
    )
  }
}
