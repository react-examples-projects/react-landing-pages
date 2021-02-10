import { createContext, useState } from "react";
import { getFirstId } from "../helpers";

export const SectionTaskContext = createContext(getFirstId());

export default function SectionsTaskProvider({ children }) {
  const [sectionId, setSectionid] = useState(getFirstId());
  return (
    <SectionTaskContext.Provider value={{ sectionId, setSectionid }}>
      {children}
    </SectionTaskContext.Provider>
  );
}
