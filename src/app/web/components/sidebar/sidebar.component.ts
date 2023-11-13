import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  services
import { NavToggleService } from '../../services/navToggle/nav-toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isDisplayedSidebar = false;
  navToggleSub: Subscription = new Subscription();

  constructor (
    private navToggleSvc: NavToggleService
  ) {}

  ngOnInit(): void {
    this.navToggleSub = this.navToggleSvc.navObservable()
      .subscribe(res => this.isDisplayedSidebar = res);
  }

  ngOnDestroy(): void {
    this.navToggleSub.unsubscribe()
  }
}
