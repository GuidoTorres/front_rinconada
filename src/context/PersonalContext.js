import { createContext, useState } from "react";

export const PersonalContext = createContext();

export const PersonalProvider = ({ children }) => {
  const [render, setRender] = useState("inicio");
  const [openModal, setOpenModal] = useState(false);

  const [registrarPersonal, setRegistrarPersonal] = useState(false);
  const [historialContrato, setRegistrarHistorial] = useState(false);
  const [registrarContrato, setRegistraContrato] = useState(false);
  const [historialEvaluacion, setHistorialEvaluacion] = useState(false);
  const [registrarEvaluacion, setRegistrarEvaluacion] = useState(false);

  return (
    <PersonalContext.Provider
      value={{
        render,
        setRender,
        openModal,
        setOpenModal,
        registrarPersonal,
        setRegistrarPersonal,
        registrarEvaluacion,
        setRegistrarEvaluacion,
        historialContrato,
        setRegistrarHistorial,
        registrarContrato,
        setRegistraContrato,
        historialEvaluacion,
        setHistorialEvaluacion,
      }}
    >
      {children}
    </PersonalContext.Provider>
  );
};
