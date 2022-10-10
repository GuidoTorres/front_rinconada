import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";
import { PersonalContext } from "../../context/PersonalContext";


function Tabla({ data }) {

  const { setRegistrarHistorial, setHistorialEvaluacion} = useContext(PersonalContext)

  const personal = [
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
      cell: (e) => <AiFillEye onClick={() => setHistorialEvaluacion(true)}/>,
    },
    {
      id: "Contrato",
      name: "Contrato",
      button: true,
      cell: (e) => <AiFillEye onClick={() => setRegistrarHistorial(true)}/>,
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


  return (
    <div className="table-container">
      <DataTable columns={personal}
       data={data}
        />
    </div>
  );
}

export default Tabla;
