import Swal from "sweetalert2";

const alertaError = () => {
  return Swal.fire({
    icon: "error",
    // title: "Error...",
    text: "Campos incompletos!",
    footer: '<a href="">Why do I have this issue?</a>',
  });
};
const alertaExito = (text) => {
  return Swal.fire({
    icon: "success",
    // title: "Error...",
    text: `${text} creado con éxito!`,
  });
};
const alertaEditarExito = (text) => {
  return Swal.fire({
    icon: "success",
    // title: "Error...",
    text: `${text} creado con éxito!`,
  });
};

const alertaEliminarExito = (text) => {
  return Swal.fire({
    title: `¿Estas seguro de eliminar este ${text}?`,
    text: "No podras deshacerlo",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Eliminar'
  })
};

export { alertaError, alertaExito , alertaEliminarExito, alertaEditarExito};
