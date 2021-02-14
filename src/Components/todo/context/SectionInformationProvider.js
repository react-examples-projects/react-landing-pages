import { createContext, useState, useMemo, useContext } from "react";
import { getAllSectionTasks } from "../helpers";

export const SectionInformationContext = createContext();

export const useSectionInformation = () => {
  const context = useContext(SectionInformationContext);
  if (!context) {
    throw new Error("El consumidor de las secciones debe tener un proveedor");
  }
  return context;
};

export default function SectionInformationProvider(props) {
  const [sectionTasks, setSectionTasks] = useState(getAllSectionTasks());
  const value = useMemo(() => ({ sectionTasks, setSectionTasks }), [
    sectionTasks,
  ]);

  return <SectionInformationContext.Provider value={value} {...props} />;
}
