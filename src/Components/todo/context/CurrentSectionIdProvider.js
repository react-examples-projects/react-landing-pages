import { createContext, useState } from "react";
import { getFirstSectionId } from "../helpers";

export const CurrentSectionIdContext = createContext(getFirstSectionId());

export default function CurrentSectionIdProvider({ children }) {
  const [sectionId, setSectionid] = useState(getFirstSectionId());
  return (
    <CurrentSectionIdContext.Provider value={{ sectionId, setSectionid }}>
      {children}
    </CurrentSectionIdContext.Provider>
  );
}
