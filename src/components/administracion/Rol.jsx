import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

function Rol({ text, path }) {
  const { setRender } = useContext(AdminContext);
  return (
    <Link
      className="rol"
      to={`/administracion/${path}`}
      onClick={(e) => {
        setRender(text);
      }}
    >
      <span></span>
      <label htmlFor="">{text}</label>
    </Link>
  );
}

export default Rol;
