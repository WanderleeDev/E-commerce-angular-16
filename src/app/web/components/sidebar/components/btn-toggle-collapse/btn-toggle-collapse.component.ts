import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
//  services
import { NavToggleService } from 'src/app/web/services/navToggle/nav-toggle.service';

@Component({
  selector: 'app-btn-toggle-collapse',
  templateUrl: './btn-toggle-collapse.component.html',
  styleUrls: ['./btn-toggle-collapse.component.scss']
})
export class BtnToggleCollapseComponent implements OnInit{
  navbarSubscription = new Subscription();
  appearNavbar = false;

  constructor (
    private navToggleSvc: NavToggleService
  ) {}

  ngOnInit(): void {
    this.navbarSubscription = this.navToggleSvc.navObservable()
      .subscribe({
        next: (res) => {
          this.appearNavbar = res;
          console.log('nav state obtain');

        },
        error: (err) => console.error(err),
        complete: () => console.log('complete')
      })
  }

  public navbarToggle (): void {
    this.navToggleSvc.navbarToggle()
  }
}
