import { Component, OnInit } from '@angular/core';
//  services
import { NavToggleService } from 'src/app/web/services/navToggle/nav-toggle.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  isNavbarView = true;
  
  constructor (
    private navToggleSvc: NavToggleService
  ) {}

  ngOnInit(): void {
    this.navToggleSvc.navObservable()
      .subscribe(res => this.isNavbarView = res);
  }
}
