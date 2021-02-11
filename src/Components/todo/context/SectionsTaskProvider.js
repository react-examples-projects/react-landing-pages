import { createContext, useState } from "react";
import { getFirstSectionId } from "../helpers";

export const SectionTaskContext = createContext(getFirstSectionId());

export default function SectionsTaskProvider({ children }) {
  const [sectionId, setSectionid] = useState(getFirstSectionId());
  return (
    <SectionTaskContext.Provider value={{ sectionId, setSectionid }}>
      {children}
    </SectionTaskContext.Provider>
  );
}
