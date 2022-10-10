import React, { useContext } from "react";
import Buscador from "../components/administracion/Busqueda";
import Tabla from "../components/personal/Tabla";
import Header from "../components/header/Header";
import { personal } from "../data/PersonalData";
import MRegistroPersonal from "../components/personal/MRegistroPersonal";
import MHistorialContrato from "../components/personal/MHistorialContrato";
import MRegistrarContrato from "../components/personal/MRegistrarContrato";
import MHistorialEvalucion from "../components/personal/MHistorialEvalucion";
import { PersonalContext } from "../context/PersonalContext";
// import MRegistroEvalucion from "../components/personal/MRegistroEvalucion";

function Personal() {
  const {
    historialEvaluacion,
    registrarContrato,
    historialContrato,
    registrarPersonal,
    setRegistrarPersonal,
    // registrarEvaluacion,
  } = useContext(PersonalContext);

  console.log(registrarPersonal);
  return (
    <div className="personal-container">
      <div className="personal-content">
        <Header text={"Personal"} user={"Usuario"} />
        <>
          <Buscador registro={setRegistrarPersonal} />
          <Tabla data={personal} />
        </>

        {registrarPersonal && <MRegistroPersonal />}
        {historialContrato && <MHistorialContrato />}
        {registrarContrato && <MRegistrarContrato />}
        {historialEvaluacion && <MHistorialEvalucion />}
        {/* {registrarEvaluacion && <MRegistroEvalucion />} */}
      </div>
    </div>
  );
}

export default Personal;
