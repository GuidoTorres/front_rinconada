import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PersonalContext } from "../../context/PersonalContext";

function MRegistrarContrato() {
  const { setRegistraContrato } = useContext(PersonalContext);

  return (
    <div className="modal-container">
      {/* <div className="overlay"></div> */}
      <Modal.Dialog className="modal-dialog">
        <Modal.Header closeButton onClick={(e) => setRegistraContrato(false)}>
          <Modal.Title>Registro de contrato</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="modal-body">
            <section>
              <div>
                <label>Fecha de ingreso</label>
                <input type="date"></input>
              </div>
              <div>
                <label>Código contrato</label>
                <input></input>
              </div>
              <div>
                <label>Tipo de Contrato</label>
                <select></select>
              </div>

              <div>
                <label>Puesto o Rol</label>
                <select></select>
              </div>
            </section>
            <section>
              <div>
                <label>Cooperativa</label>
                <input></input>
              </div>
              <div>
                <label>Recomendado por</label>
                <input></input>
              </div>
              <div>
                <label>Condición de cooperativa</label>
                <input></input>
              </div>
              <div>
                <label>Campamento</label>
                <select></select>
              </div>
            </section>
            <section>
              <div>
                <label>Periodo de trabajo</label>
                <input></input>
              </div>
              <div>
                <label>Fecha de fin</label>
                <input type="date"></input>
              </div>
              <div>
                <label>Gerencia</label>
                <input></input>
              </div>
              <div>
                <label>Área</label>
                <select></select>
              </div>
            </section>

            <section>
              <div>
                <label>Jefe directo</label>
                <input></input>
              </div>
              <div>
                <label>Base</label>
                <input></input>
              </div>

            </section>
            <section>
              <div>
                <label>Término de contrato</label>
                <textarea></textarea>
              </div>
              <div>
                <label>Nota de contrato</label>
                <input></input>
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

export default MRegistrarContrato;
