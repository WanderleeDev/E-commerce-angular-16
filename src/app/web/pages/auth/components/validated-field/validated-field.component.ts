import { Component, Input } from '@angular/core';
import { IFieldForm } from '../../interfaces/IFieldForm.interface';

@Component({
  selector: 'app-validated-field',
  templateUrl: './validated-field.component.html',
  styleUrls: ['./validated-field.component.scss']
})
export class ValidatedFieldComponent {
  @Input({required: true}) dataField!: IFieldForm;
}
