import { AiFillEdit } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";

const handleEdit = (e) => {



}

export const usuario = [
  {
    id: "Nro",
    name: "Nro",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    id: "Nombre",
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    id: "Usuario",
    name: "Usuario",
    selector: (row) => row.usuario,
    sortable: true,
  },
  {
    id: "Contraseña",
    name: "Contraseña",
    selector: (row) => row.contrasenia,
    sortable: true,
    reorder: true,
  },
  {
    id: "Estado",
    name: "Estado",
    selector: (row) => (row.estado === false ? "Inactivo" : "Activo"),
    sortable: true,
  },
  {
    id: "Acciones",
    name: "Acciones",
    button: true,
    cell: (e) => (
      <div
        style={{
          display: "flex",
          width: "40px",
          justifyContent: "space-between",
          fontSize: "18px",
        }}
      >
        <AiFillEdit onClick={() => handleEdit(e)} />
        <BsFillTrash2Fill onClick={() => (e)} />
      </div>
    ),
  },
];

export const rol = [
  {
    id: "Nro",
    name: "Nro",
  },
  {
    id: "Nombre",
    name: "Nombre",
  },
  {
    id: "Usuario",
    name: "Usuario",
  },
  {
    id: "Puesto",
    name: "Puesto",
  },
  {
    id: "Rol",
    name: "Rol",
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

export const campamento = [
  {
    id: "Nro",
    name: "Nro",
  },
  {
    id: "Nombre",
    name: "Nombre",
  },

  {
    id: "Dirección",
    name: "Dirección",
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
