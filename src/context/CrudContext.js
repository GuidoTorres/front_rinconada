import { createContext, useState } from "react";
import { alertaEliminarExito } from "../components/helpers/alert";

export const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [modalCampamento, setModalCampamento] = useState(false);

  const getData = async (route) => {
    const response = await fetch(`${process.env.REACT_APP_BASE}/${route}`);
    const data = await response.json();

    if (data) return data;
  };

  const createData = async (data, route) => {
    const prueba = await fetch(`${process.env.REACT_APP_BASE}/${route}`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const content = await prueba.json();
    return content;
  };

  const updateData = async (data, id, route) => {
    const prueba = await fetch(`${process.env.REACT_APP_BASE}/${route}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const content = await prueba.json();

    return content;
  };

  const deleteData = async (id, route) => {
    const prueba = await fetch(`${process.env.REACT_APP_BASE}/${route}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    const content = await prueba.json();
    return content;
  };

  const info = {
    createData,
    getData,
    updateData,
    deleteData,
    data,
    setData,
    modalCampamento,
    setModalCampamento,
  };
  return <CrudContext.Provider value={info}>{children}</CrudContext.Provider>;
};
