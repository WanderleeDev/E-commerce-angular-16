import { Component, OnInit } from '@angular/core';
//  services
import { NavToggleService } from 'src/app/web/services/navToggle/nav-toggle.service';

@Component({
  selector: 'app-side-bar-links',
  templateUrl: './side-bar-links.component.html',
  styleUrls: ['./side-bar-links.component.scss']
})
export class SideBarLinksComponent implements OnInit {
  isView = false;
  links = [
    'home',
    'login',
    'product',
    'explore',
    'analytics',
    'reports'
  ];

  constructor (
    private navToggleSvc: NavToggleService
  ) {}

  ngOnInit(): void {
    this.navToggleSvc.navObservable()
      .subscribe(res => this.isView = res);
  }
}
