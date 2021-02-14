import { createContext, useState } from "react";
import { getAllSectionTasks } from "../helpers";

export const SectionInformationContext = createContext();

export default function SectionInformationProvider({ children }) {
  const [sectionTasks, setSectionTasks] = useState(getAllSectionTasks());

  return (
    <SectionInformationContext.Provider
      value={{ sectionTasks, setSectionTasks }}
    >
      {children}
    </SectionInformationContext.Provider>
  );
}
