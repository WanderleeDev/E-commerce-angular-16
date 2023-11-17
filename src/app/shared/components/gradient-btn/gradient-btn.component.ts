import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gradient-btn',
  templateUrl: './gradient-btn.component.html',
  styleUrls: ['./gradient-btn.component.scss']
})
export class GradientBtnComponent {
  @Input({required:true}) dataBtn = 'empty';
  @Input() pathLink?: string;
  @Input() type = 'button';
  @Input() isDisable = false;
}
