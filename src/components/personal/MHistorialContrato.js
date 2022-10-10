import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Tabla from "./Tabla";
import { historialContrato } from "../../data/PersonalData";
import Buscador from "../administracion/Busqueda";
import { PersonalContext } from "../../context/PersonalContext";

function MHistorialContrato() {
  const { setRegistrarHistorial,setRegistraContrato } = useContext(PersonalContext);
  return (
    <div className="modal-container">
      <div className="overlay"></div>
      <Modal.Dialog className="modal-dialog">
        <Modal.Header closeButton onClick={(e) => setRegistrarHistorial(false)}>
          <Modal.Title>Historial de contrato</Modal.Title>
        </Modal.Header>

        <Buscador registro={setRegistraContrato}/>
        <Modal.Body></Modal.Body>
        <Tabla data={historialContrato} />
        <Modal.Footer>
          {/* <Button variant="secondary">Close</Button> */}
          {/* <Button variant="primary">Guardar</Button> */}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default MHistorialContrato;
