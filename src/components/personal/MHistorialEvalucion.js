import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Tabla from "./Tabla";
import { historialEvaluacion } from "../../data/PersonalData";
import Buscador from "../administracion/Busqueda";
import { PersonalContext } from "../../context/PersonalContext";

const MHistorialEvalucion = () => {
    const {  setHistorialEvaluacion,setRegistrarEvaluacion } = useContext(PersonalContext);
    return (
      <div className="modal-container">
        <div className="overlay"></div>
        <Modal.Dialog className="modal-dialog">
          <Modal.Header closeButton onClick={(e) => setHistorialEvaluacion(false)}>
            <Modal.Title>Historial de evaluación</Modal.Title>
          </Modal.Header>
  
          <Buscador registro={setRegistrarEvaluacion}/>
          <Modal.Body></Modal.Body>
          <Tabla data={historialEvaluacion} />
          <Modal.Footer>
            {/* <Button variant="secondary">Close</Button> */}
            {/* <Button variant="primary">Guardar</Button> */}
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
}

export default MHistorialEvalucion