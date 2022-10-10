import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AdminContext } from "../../context/AdminContext";

function MRegistroEvalucion() {
    const { setRegistrarEvaluacion } = useContext(AdminContext);

    return (
      <div className="modal-container">
        <div className="overlay"></div>
        <Modal.Dialog className="modal-dialog">
          <Modal.Header closeButton onClick={(e) => setRegistrarEvaluacion(false)}>
            <Modal.Title>Registro de evaluación</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <div className="modal-body">
              <section>
                <div>
                  <label>Fecha de evaluación</label>
                  <input type="date"></input>
                </div>
                <div>
                  <label>Dni</label>
                  <input></input>
                </div>
                <div>
                  <label>Puesto o Rol</label>
                  <select></select>
                </div>
  
                <div>
                  <label>Id de contrato</label>
                  <input></input>
                </div>
              </section>
              <section>
                <div>
                  <label>Capacitación SSO</label>
                  <input></input>
                </div>
                <div>
                  <label>Capacitación GEMA</label>
                  <input></input>
                </div>
                <div>
                  <label>Evaluacion Laboral</label>
                  <input></input>
                </div>
 
              </section>
              <section>
                <div>
                  <label>Presión arterial</label>
                  <input></input>
                </div>
                <div>
                  <label>Temperatura</label>
                  <input></input>
                </div>
                <div>
                  <label>Saturación de oxígeno</label>
                  <input></input>
                </div>
                <div>
                  <label>IMC</label>
                  <select></select>
                </div>
              </section>
  
              <section>
                <div>
                  <label>Pulso(pm)</label>
                  <input></input>
                </div>
                <div>
                  <label>Diabetes</label>
                  <input></input>
                </div>

              </section>
              <section>
                <div>
                  <label>Antecedente CCM</label>
                  <textarea></textarea>
                </div>
                <div>
                  <label>Cargar EMO</label>
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

export default MRegistroEvalucion