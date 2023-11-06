import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { BtnBaseComponent } from './components/btn-base/btn-base.component';



@NgModule({
  declarations: [
    CardComponent,
    BtnBaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    BtnBaseComponent
  ]
})
export class SharedModule { }
