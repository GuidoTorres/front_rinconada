import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function MAsignarRol() {
    const { setAsignarUsuario } = useContext(AdminContext);

  return (
    <div className="modal-user">
    <div className="overlay"></div>

    <Modal.Dialog className="modal-dialog-user">
      <Modal.Header closeButton onClick={(e) => setAsignarUsuario(false)}>
        <Modal.Title>Asignar rol</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal-body">
          <section>
            <div>
              <label>Nombre</label>
              <input></input>
            </div>
            <div>
              <label>Usuario</label>
              <input></input>
            </div>
            <div>
              <label>Puesto</label>
              <input></input>
            </div>

            <div>
              <label>Rol</label>
              <select></select>
            </div>
          </section>
        </div>
      </Modal.Body>

      <Modal.Footer className="modal-footer">
        {/* <Button variant="secondary">Close</Button> */}
        <Button  variant="primary">Guardar</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default MAsignarRol