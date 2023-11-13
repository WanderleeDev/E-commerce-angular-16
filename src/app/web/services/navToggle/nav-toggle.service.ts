import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavToggleService {
  private navbarToggle$ = new BehaviorSubject(true);

  public navbarToggle (): void {
    this.navbarToggle$.next(!this.navbarToggle$.value);
  }

  public navObservable(): Observable<boolean> {
    return this.navbarToggle$.asObservable();
  }
}
