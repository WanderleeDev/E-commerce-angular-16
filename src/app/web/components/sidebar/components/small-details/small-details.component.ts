import { Component, OnInit } from '@angular/core';
//  services
import { NavToggleService } from 'src/app/web/services/navToggle/nav-toggle.service';

@Component({
  selector: 'app-small-details',
  templateUrl: './small-details.component.html',
  styleUrls: ['./small-details.component.scss']
})
export class SmallDetailsComponent implements OnInit {
  isView = false;

  constructor (
    private navToggleSvc: NavToggleService
  ) {}

  ngOnInit(): void {
    this.navToggleSvc.navObservable()
      .subscribe(res => this.isView = res)
  }
}
