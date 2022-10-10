import React from "react";
import { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

function Header({ text, user }) {
  const { render, setRender } = useContext(AdminContext);

  return (
    <div className="header-container">
      <div className="header-role">
        {text ? (
          <Link
            to={`/administracion`}
            onClick={(e) => {
              setRender(text);
            }}
          >
            <AiOutlineArrowLeft
              onClick={(e) => setRender(null)}
              className="back"
            />
          </Link>
        ) : null}
        <label htmlFor="">{text}</label>
      </div>
      <div className="header-user">
        <label htmlFor="">{user}</label>
        <span>ho</span>
      </div>
    </div>
  );
}

export default Header;
