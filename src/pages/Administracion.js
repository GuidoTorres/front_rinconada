import React from "react";
import { Outlet } from "react-router-dom";
import {  AdminProvider } from "../context/AdminContext";

function Administracion() {

  return (
    <AdminProvider>
      <div className="admin-container">
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </AdminProvider>
  );
}

export default Administracion;
