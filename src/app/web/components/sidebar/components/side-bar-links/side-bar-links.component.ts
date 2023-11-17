import { Component, Input } from '@angular/core';

interface ILinks {
  path: string;
  title: string;
}

@Component({
  selector: 'app-side-bar-links',
  templateUrl: './side-bar-links.component.html',
  styleUrls: ['./side-bar-links.component.scss']
})
export class SideBarLinksComponent {
  @Input({required: true}) hasPartiallyHidden = true;

  links:ILinks[] = [
    {
      path: 'home',
      title: 'home'
    },
    {
      path: 'auth',
      title: 'auth'
    },
    {
      path: 'all-products',
      title: 'all products'
    },
    {
      path: 'favorites',
      title: 'favorites'
    },
    {
      path: 'shopping-car',
      title: 'shopping car'
    },
    {
      path: 'extra',
      title: 'extra'
    }
  ];
}
