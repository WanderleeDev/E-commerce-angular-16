import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  scrollSub = new Subscription();

  constructor (
    private router: Router
  ) {}

  ngOnInit(): void {
    this.scrollSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    })
  }

  ngOnDestroy(): void {
    this.scrollSub.unsubscribe();
  }

  private scrollToTop (): void {
    window.scrollTo(0, 0);
  }
}
