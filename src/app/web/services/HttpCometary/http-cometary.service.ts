import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDataCometary } from '../../interfaces/ICometary.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpCometaryService {
  private urlComet = 'https://dummyjson.com/comments';

  constructor(
    private http: HttpClient
  ) {}

  public getRandomComets ():Observable<IDataCometary> {
    const randomNum = (num = 10) => Math.ceil(Math.random() * num);

    let params: HttpParams = new HttpParams();
    params = params.set('limit', randomNum(50));
    params = params.set('skip', randomNum(25));

    return this.http.get<IDataCometary>(this.urlComet, {params})
  }
}
