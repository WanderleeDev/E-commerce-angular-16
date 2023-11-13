import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input({required:true}) title = 'Default title';
  @Input({required: true}) hasPartiallyHidden = true;
  @Input({required: false}) svgColor?:string;
}
