import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import Header from "../header/Header";
import Buscador from "./Busqueda";
import Tabla from "./Tabla";
import MRegistroUsuario from "./MRegistroUsuario";
import { CrudContext } from "../../context/CrudContext";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";
import { alertaEliminarExito } from "../helpers/alert";
import Swal from "sweetalert2";

function Usuarios() {
  const { render, registrarUsuario, setRegistrarUsuario, setDataToEdit } =
    useContext(AdminContext);
  const { getData, deleteData, data, setData } = useContext(CrudContext);
  const route = "usuario"
  const usuarioService = async () => {
    const prueba = await getData(route);
    setData(prueba.data);
  };

  useEffect(() => {
    usuarioService();
  }, []);

  const handleEdit = (e) => {
    setDataToEdit(e);
    setRegistrarUsuario(true);
  };

  const handleDelete = (id) => {
    alertaEliminarExito("usuario").then((res) => {
      if (res.isConfirmed) {
        deleteData(id, route);

        Swal.fire(
          "Eliminado!",
          "El usuario se elimino correctamente.",
          "success"
        );
      }
      usuarioService();
    });
  };

  const usuario = [
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
      selector: (row) => (!row.estado ? "Inactivo" : "Activo"),
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
          <BsFillTrash2Fill onClick={() => handleDelete(e.id)} />
        </div>
      ),
    },
  ];

  return (
    <>
      <Header text={"Usuarios"} user={"Usuario"} />
      <Buscador registro={setRegistrarUsuario} />
      <Tabla columns={usuario} table={data} />
      {registrarUsuario && <MRegistroUsuario data={usuarioService} />}
    </>
  );
}

export default Usuarios;
