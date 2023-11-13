import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-side-bar-links',
  templateUrl: './side-bar-links.component.html',
  styleUrls: ['./side-bar-links.component.scss']
})
export class SideBarLinksComponent {
  @Input({required: true}) hasPartiallyHidden = true;

  links = [
    'home',
    'login',
    'All products',
    'explore',
    'analytics',
    'reports'
  ];
}
