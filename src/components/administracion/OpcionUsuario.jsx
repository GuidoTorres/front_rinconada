import React from "react";
import Rol from "./Rol";

function Opciones() {
  return (
    <div className="opciones-container">
      <Rol text={"Usuarios"} path={"usuarios"}/>
      <Rol text={"Roles o Puestos"} path={"roles"}/>
      <Rol text={"Campamentos"} path={"campamentos"}/>
    </div>
  );
}

export default Opciones;
