import { Injectable, inject } from '@angular/core';
//  services
import { ToastrService } from 'ngx-toastr';
//  customConfig
import { configToastr } from 'src/app/helpers/toastr.config';


@Injectable({
  providedIn: 'root'
})
export class CustomToastService {
  messages = {
    error: 'Error',
  }

  private toastrSvc = inject(ToastrService)

  public show(message: string, title = '') {
    this.toastrSvc.show(message, title, configToastr);
  }

  public success(message: string, title = '') {
    this.toastrSvc.success(message, title, configToastr);
  }

  public error(message: string, title = '') {
    this.toastrSvc.error(message, title, configToastr);
  }

  public info(message: string, title = '') {
    this.toastrSvc.info(message, title, configToastr);
  }

  public warning(message: string, title = '') {
    this.toastrSvc.warning(message, title, configToastr);
  }

}
