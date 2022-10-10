import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { alertaEditarExito, alertaError, alertaExito } from "../helpers/alert";
import { CrudContext } from "../../context/CrudContext";

function MRegistrarCampamento({ data }) {
  const initialValues = {
    nombre: "",
    direccion: "",
  };
  const { setRegistrarCampamento, dataToEdit, setDataToEdit } =
    useContext(AdminContext);
  const { createData, updateData } = useContext(CrudContext);
  const [campamento, setCampamento] = useState(initialValues);
  const route = "campamento";

  useEffect(() => {
    if (dataToEdit) {
      setCampamento(dataToEdit);
    } else {
      setCampamento(initialValues);
    }
  }, [dataToEdit]);

  const handleData = (e) => {
    const { name, value } = e.target;
    setCampamento((values) => {
      return { ...values, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!campamento.nombre || !campamento.direccion) {
      alertaError();
    } else if (dataToEdit === null) {
      createData(campamento, route);
      alertaExito("campamento");
      closeModal();
      data();
    }

    if (dataToEdit) {
      updateData(campamento, dataToEdit.id, route);
      alertaEditarExito("campamento");
      closeModal();
      data()
    }
  };

  const closeModal = () => {
    setRegistrarCampamento(false);
    setDataToEdit(null);
    setCampamento(initialValues);
  };

  return (
    <div className="modal-user">
      <div className="overlay"></div>

      <Modal.Dialog className="modal-dialog-user">
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>
            {dataToEdit ? "Editar campamento" : "Registrar campamento"}
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
                  value={campamento.nombre}
                  onChange={(e) => handleData(e)}
                ></input>
              </div>
              <div>
                <label>Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  value={campamento.direccion}
                  onChange={(e) => handleData(e)}
                ></input>
              </div>
              <div>
                <button>{dataToEdit ? "Editar" : "Registrar"}</button>
              </div>
            </section>
          </form>
        </Modal.Body>

        <Modal.Footer className="modal-footer">
          {/* <Button variant="secondary">Close</Button> */}
          {/* <Button variant="primary">Guardar</Button> */}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default MRegistrarCampamento;
