import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar-links',
  templateUrl: './side-bar-links.component.html',
  styleUrls: ['./side-bar-links.component.scss']
})
export class SideBarLinksComponent {
  links = [
    'home',
    'porfolio',
    'watchlist',
    'explore',
    'analytics',
    'reports'
  ]
}
