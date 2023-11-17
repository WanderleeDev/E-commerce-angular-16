import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monochrome-btn',
  templateUrl: './monochrome-btn.component.html',
  styleUrls: ['./monochrome-btn.component.scss']
})
export class MonochromeBtnComponent {
  @Input({required:true}) dataBtn = 'empty'
}
