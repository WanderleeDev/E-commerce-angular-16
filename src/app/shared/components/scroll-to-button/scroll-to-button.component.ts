import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-to-button',
  template: `
  <a href="#main"
    class="btnScroll"
    title="Go to top of page"
    aria-label="Go to top of page">
    <svg width="20" fill="currentColor" height="20" viewBox="0 0 24 24"><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/></svg>
  </a>`,
  styleUrls: ['./scroll-to-button.component.scss']
})
export class ScrollToButtonComponent {}
