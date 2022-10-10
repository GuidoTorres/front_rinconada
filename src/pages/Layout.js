import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "./Personal";
import Usuarios from "../components/administracion/Usuarios";
import Roles from "../components/administracion/Roles";
import Campamentos from "../components/administracion/Campamentos";
import AdministracionIndex from "../components/administracion/AdministracionIndex";
import { AdminProvider } from "../context/AdminContext";
import { PersonalProvider } from "../context/PersonalContext";
import { CrudProvider } from "../context/CrudContext";

function Layout() {
  return (
    <Router>
      <div className="layout-container">
        <section className="side">
          <Sidebar />
        </section>
        <section className="content">
          <AdminProvider>
            <CrudProvider>
              <Routes>
                <Route path="administracion">
                  <Route index element={<AdministracionIndex />} />
                  <Route path="usuarios" element={<Usuarios />} />
                  <Route path="roles" element={<Roles />} />
                  <Route path="campamentos" element={<Campamentos />} />
                </Route>
              </Routes>
            </CrudProvider>
          </AdminProvider>
          <PersonalProvider>
            <Routes>
              <Route path="/Personal" element={<Personal />} />
              {/* <Route path="*" element={<h1>No se encontro</h1>} /> */}
            </Routes>
          </PersonalProvider>
        </section>
      </div>
    </Router>
  );
}

export default Layout;
