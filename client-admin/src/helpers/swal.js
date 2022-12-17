import Swal from "sweetalert2";

export const swalError = (message) => {
  return Swal.fire({
    icon: 'error',
    title: message,
  })
}

export const swalSuccess = (message) => {
  return Swal.fire({
    icon: 'success',
    title: message,
  })
}

export const swalConfirmDelete = () => {
  return Swal.fire({
    title: 'Are you sure want to delete?',
    showCancelButton: true,
    confirmButtonText: 'Delete',
  }).then((result) => {
    return result.isConfirmed
  })
}