import { AiFillSetting } from "react-icons/ai";
import Administracion from "../pages/Administracion";

export const SidebarData = [
  {
    title: "Administración",
    path: "/administracion",
    icon: <AiFillSetting />,
    main: <Administracion/>
  },
  {
    title: "Personal",
    path: "/personal",
    icon: <AiFillSetting />,
    // main: () => <Personal/>

  },
  {
    title: "Planillas",
    path: "/planillas",
    icon: <AiFillSetting />,
  },
  {
    title: "Logística",
    path: "/logistica",
    icon: <AiFillSetting />,
  },
  {
    title: "Finanzas",
    path: "/finanzas",
    icon: <AiFillSetting />,
  },
];
