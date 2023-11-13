import { Component, Input } from '@angular/core';
//  services
import { NavToggleService } from 'src/app/web/services/navToggle/nav-toggle.service';

@Component({
  selector: 'app-btn-toggle-collapse',
  templateUrl: './btn-toggle-collapse.component.html',
  styleUrls: ['./btn-toggle-collapse.component.scss']
})
export class BtnToggleCollapseComponent {
  @Input({required: true}) hasPartiallyHidden = true;

  constructor (
    private navToggleSvc: NavToggleService
  ) {}

  public navbarToggle (): void {
    this.navToggleSvc.navbarToggle()
  }
}
