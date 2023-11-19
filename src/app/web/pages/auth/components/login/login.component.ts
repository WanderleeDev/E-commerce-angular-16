import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFieldForm } from '../../interfaces/IFieldForm.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly inputs: IFieldForm[] = [
    {
      name: 'username',
      type: 'text'
    },
    {
      name: 'password',
      type: 'password'
    }
  ];

  protected loginForm: FormGroup;

  constructor (
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.nonNullable.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public login(): void {
    console.log(this.loginForm.value);

    this.loginForm.reset();

    for (const key of Object.keys(this.loginForm.controls)) {
      this.loginForm.controls[key].setValue('')
    }
  }
}
