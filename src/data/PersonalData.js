import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";

export const personal = [
  {
    id: "Nro",
    name: "Nro",
  },
  {
    id: "Campamento",
    name: "Campamento",
  },
  {
    id: "Trabajador",
    name: "Trabajador",
  },
  {
    id: "Dni",
    name: "Dni",
  },
  {
    id: "T. de trabajador",
    name: "T. de trabajador",
  },
  {
    id: "Evaluación",
    name: "Evaluación",

    button: true,
    cell: (e) => <AiFillEye />,
  },
  {
    id: "Contrato",
    name: "Contrato",
    button: true,
    cell: (e) => <AiFillEye />,
  },
  {
    id: "Deshabilitar",
    name: "Deshabilitar",
    button: true,
    cell: (e) => <input type="checkbox" />,
  },
  {
    id: "Acciones",
    name: "Acciones",
    button: true,
    cell: (e) => (
      <>
        <AiFillEdit />
        <BsFillTrash2Fill />
      </>
    ),
  },
];

export const historialContrato = [
  {
    id: "Id contrato",
    name: "Id contrato",
  },
  {
    id: "Tipo de Contrato",
    name: "Tipo de Contrato",
  },
  {
    id: "Fecha de inicio",
    name: "Fecha de inicio",
  },
  {
    id: "Fecha de fin",
    name: "Fecha de fin",
  },
  {
    id: "Estado",
    name: "Estado",
  },
  {
    id: "Nota",
    name: "Nota",
  },
  {
    id: "Acciones",
    name: "Acciones",
    button: true,
    cell: (e) => (
      <>
        <AiFillEdit />
        <BsFillTrash2Fill />
      </>
    ),
  },
];

export const historialEvaluacion = [
  {
    id: "Id Historial",
    name: "Id Historial",
  },
  {
    id: "Nombre",
    name: "Nombre",
  },
  {
    id: "Fecha de inicio",
    name: "Fecha de inicio",
  },
  {
    id: "Fecha de fin",
    name: "Fecha de fin",
  },
  {
    id: "Nota",
    name: "Nota",
  },
  {
    id: "Estado",
    name: "Estado",
  },
  {
    id: "Acciones",
    name: "Acciones",
    button: true,
    cell: (e) => (
      <>
        <AiFillEdit />
        <BsFillTrash2Fill />
      </>
    ),
  },
];
