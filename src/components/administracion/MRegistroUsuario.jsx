import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import Modal from "react-bootstrap/Modal";
import { CrudContext } from "../../context/CrudContext";
import { alertaEditarExito, alertaError, alertaExito } from "../helpers/alert";

function MRegistroUsuario({ data }) {
  const initialValues = {
    nombre: "",
    usuario: "",
    contrasenia: "",
    estado: "",
  };
  const { setRegistrarUsuario, dataToEdit, setDataToEdit } =
    useContext(AdminContext);
  const { createData, updateData } = useContext(CrudContext);
  const [usuario, setUsuario] = useState(initialValues);
  const route = "usuario";
  useEffect(() => {
    if (dataToEdit) {
      setUsuario(dataToEdit);
    } else {
      setUsuario(initialValues);
    }
  }, [dataToEdit]);

  const handleData = (e) => {
    const { name, value } = e.target;
    setUsuario((values) => {
      return { ...values, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !usuario.nombre ||
      !usuario.usuario ||
      !usuario.contrasenia ||
      !usuario.estado
    ) {
      alertaError();
    } else if (dataToEdit === null) {
      createData(usuario, route);
      alertaExito("usuario");
      closeModal();
      data();
    }

    if (dataToEdit) {
      updateData(usuario, dataToEdit.id, route);
      alertaEditarExito("usuario");
      closeModal();
      data();
    }
  };

  const closeModal = () => {
    setRegistrarUsuario(false);
    setDataToEdit(null);
    setUsuario(initialValues);
  };

  return (
    <div className="modal-user">
      <div className="overlay"></div>
      <Modal.Dialog className="modal-dialog-user">
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>
            {dataToEdit ? "Editar usuario" : "Registrar usuario"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="modal-body" onSubmit={handleSubmit}>
            <section>
              <div>
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={usuario.nombre}
                  onChange={(e) => handleData(e)}
                ></input>
              </div>
              <div>
                <label>Usuario</label>
                <input
                  type="text"
                  name="usuario"
                  value={usuario.usuario}
                  onChange={(e) => handleData(e)}
                ></input>
              </div>
              <div>
                <label>Contraseña</label>
                <input
                  type="text"
                  name="contrasenia"
                  value={usuario.contrasenia}
                  onChange={(e) => handleData(e)}
                ></input>
              </div>

              <div>
                <label>Estado</label>
                <select
                  value={usuario.estado === "" ? -1 : !usuario.estado ? 0 : 1}
                  name="estado"
                  onChange={(e) => handleData(e)}
                >
                  <option value="-1">Seleccione</option>
                  <option value="0">Inactivo</option>
                  <option value="1">Activo</option>
                </select>
              </div>

              <div>
                <button>{dataToEdit ? "Editar" : "Registrar"}</button>
              </div>
            </section>
          </form>
        </Modal.Body>

        <Modal.Footer className="modal-footer">
          {/* <Button variant="secondary">Close</Button> */}
          {/* <Button variant="primary" onClick={(e) => handleSubmit}>
            Guardar
          </Button> */}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default MRegistroUsuario;
