import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  readonly inputs = [
    {
      name: 'user',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'password',
      type: 'password',
    }
  ]
}
