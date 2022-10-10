import React from "react";
import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AdminContext } from "../../context/AdminContext";

function Buscador({registro}) {
  const { render} = useContext(AdminContext);
  return (
    <div className="search-container">
      <span>
        <input type="text" name="" id="" />
        <AiOutlineSearch className="icon" />
      </span>
      <button onClick={(e)=> registro(true)}>
        + {render === "Roles o Puestos" ? "Asignar" : "Registrar"}
      </button>
    </div>
  );
}

export default Buscador;
