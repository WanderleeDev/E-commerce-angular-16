import { IndividualConfig } from "ngx-toastr";

export const configToastr: Partial<IndividualConfig> = {
  closeButton: true,
  progressAnimation: 'increasing',
  timeOut: 2000,
  progressBar: true,
  positionClass: 'toast-bottom-right',
  tapToDismiss: true,
};
