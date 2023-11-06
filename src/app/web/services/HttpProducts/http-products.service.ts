import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
//  interface
import { IProducts, IRequestProducts } from '../../interfaces/IProducts.interface';
//  services
import { CustomHttpErrorService } from 'src/app/shared/services/CustomHttpError/custom-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpProductsService {
  private readonly BASEURL = 'https://dummyjson.com/products'

  constructor(
    private http: HttpClient,
    private customError: CustomHttpErrorService
  ) { }

  getAllProducts (): Observable<IRequestProducts> {
    return this.http.get<IRequestProducts>(this.BASEURL).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.customError.handleCustomHttpError(error)
      })
    )
  }
}
