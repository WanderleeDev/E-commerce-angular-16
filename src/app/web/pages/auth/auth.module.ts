import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RecoveryAccountComponent } from './components/recovery-account/recovery-account.component';
import { ValidatedFieldComponent } from './components/validated-field/validated-field.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent,
    LoginComponent,
    RecoveryAccountComponent,
    ValidatedFieldComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
