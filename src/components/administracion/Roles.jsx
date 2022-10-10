import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import Header from "../header/Header";
import Buscador from "./Busqueda";
import Tabla from "./Tabla";
import { rol } from "../../data/AdminData";
import MAsignarRol from "./MAsignarRol";

function Roles() {
    const {  asignarUsuario,setAsignarUsuario } = useContext(AdminContext);

  return (
    <>
      <Header text={"Roles"} user={"Usuario"} />
      <Buscador registro={setAsignarUsuario}/>
      <Tabla data={rol} />
      
      {asignarUsuario && <MAsignarRol />}

    </>
  );
}

export default Roles;
