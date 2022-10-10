import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import Header from "../header/Header";
import Buscador from "./Busqueda";
import Tabla from "./Tabla";
import MRegistrarCampamento from "./MRegistrarCampamento";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";
import { CrudContext } from "../../context/CrudContext";
import { alertaEliminarExito } from "../helpers/alert";
import Swal from "sweetalert2";

function Campamentos() {
  const {
    registrarCampamento,
    setRegistrarCampamento,
    setDataToEdit,
    setRegistrarUsuario,
  } = useContext(AdminContext);

  const { getData, setData, data, deleteData, setModalCampamento } =
    useContext(CrudContext);
  const route = "campamento";
  const campamentoService = async () => {
    const prueba = await getData(route);
    setData(prueba.data);
  };

  useEffect(() => {
    console.log(data);
    campamentoService();
  }, []);

  const handleEdit = (e) => {
    setDataToEdit(e);
    setRegistrarCampamento(true);
  };

  const handleDelete = (id) => {
    alertaEliminarExito("campamento").then((res) => {
      if (res.isConfirmed) {
        deleteData(id, route);

        Swal.fire(
          "Eliminado!",
          "El campamento se elimino correctamente.",
          "success"
        );
      }
      campamentoService();
    });
  };

  const campamento = [
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
      id: "Dirección",
      name: "Dirección",
      selector: (row) => row.direccion,
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
      <Header text={"Campamentos"} user={"Usuario"} />
      <Buscador registro={setRegistrarCampamento} />
      <Tabla columns={campamento} table={data} />
      {registrarCampamento && <MRegistrarCampamento data={campamentoService}/>}
    </>
  );
}

export default Campamentos;
