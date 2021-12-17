import Swal, {SweetAlertOptions} from 'sweetalert2';

const toastModel: any = {
  position: 'top-right',
  showConfirmButton: false,
  showCloseButton: true,
  toast: true
};

const adviseModel: SweetAlertOptions = {
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonColor: '#d60036',
  reverseButtons: true,
  cancelButtonText: 'Cancelar'
};

export const adviseConfirmModel: SweetAlertOptions = {
  showConfirmButton: true,
  showCancelButton: true,
  confirmButtonColor: '#d60036',
  reverseButtons: true,
  cancelButtonText: 'Cancelar'
};

export const toastWarning = Swal.mixin({
  ...toastModel,
  timer: 2500,
  type: 'warning'
});

export const toastError = Swal.mixin({
  ...toastModel,
  type: 'error'
});

export const toastSuccess = Swal.mixin({
  ...toastModel,
  timer: 2500,
  type: 'success'
});

export const toastInfo = Swal.mixin({
  ...toastModel,
  timer: 2500,
  type: 'info'
});

// export const adviseWarning = Swal.mixin({
//   ...adviseModel,
//   type: 'info',
// });

// export const adviseConfirm = Swal.mixin({
//   ...adviseConfirmModel,
//   type: 'question',
// });

// export const adviseInput = Swal.mixin({
//   ...adviseConfirmModel,
// });

// export const adviseSuccess = Swal.mixin({
//   ...adviseModel,
//   type: 'success',
// });

// export const adviseError = Swal.mixin({
//   ...adviseModel,
//   type: 'error',
// });
