import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: '<router-outlet />',
  styles: [`
    :host {
      display: contents;
      // height: 100dvh;
    }
  `]
})
export class AuthComponent {}
