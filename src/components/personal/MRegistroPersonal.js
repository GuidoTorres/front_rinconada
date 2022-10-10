import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PersonalContext } from "../../context/PersonalContext";

function MRegistroPersonal() {
    const { setRegistrarPersonal } = useContext(PersonalContext);

    return (
      <div className="modal-container">
        <div className="overlay"></div>
        <Modal.Dialog className="modal-dialog">
          <Modal.Header closeButton onClick={(e) => setRegistrarPersonal(false)}>
            <Modal.Title>Registro de personal</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <div className="modal-body">
              <section>
                <div>
                  <label>Dni</label>
                  <input></input>
                </div>
                <div>
                  <label>Código Trabajador</label>
                  <input></input>
                </div>
                <div>
                  <label>Fecha de nacimiento</label>
                  <input></input>
                </div>
  
                <div>
                  <label>Teléfono</label>
                  <input></input>
                </div>
              </section>
              <section>
                <div>
                  <label>Nombre</label>
                  <input></input>
                </div>
                <div>
                  <label>Apellido Paterno</label>
                  <input></input>
                </div>
                <div>
                  <label>Apellido Materno</label>
                  <input></input>
                </div>
                <div>
                  <label>Email</label>
                  <input></input>
                </div>
              </section>
              <section>
                <div>
                  <label>Estado civil</label>
                  <input></input>
                </div>
                <div>
                  <label>Género</label>
                  <input></input>
                </div>
                <div>
                  <label>Dirección</label>
                  <input></input>
                </div>
                <div>
                  <label>Tipo de Trabajador</label>
                  <select></select>
                </div>
              </section>
  
              <section>
                <div>
                  <label>Nombre Asociación</label>
                  <input></input>
                </div>
                <div>
                  <label>Código Asociación</label>
                  <input></input>
                </div>
                <div>
                  <button>+</button>
                </div>
              </section>
              <section>
                <div>
                  <label>Razón social</label>
                  <input></input>
                </div>
                <div>
                  <label>Ruc empresa</label>
                  <input></input>
                </div>
                <div>
                  <button>+</button>
                </div>
              </section>
            </div>
          </Modal.Body>
  
          <Modal.Footer>
            {/* <Button variant="secondary">Close</Button> */}
            <Button variant="primary">Guardar</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
}

export default MRegistroPersonal