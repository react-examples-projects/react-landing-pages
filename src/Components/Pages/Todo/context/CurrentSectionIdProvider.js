import { createContext, useState, useMemo, useContext } from "react";
import { getFirstSectionId } from "../helpers";

export const CurrentSectionIdContext = createContext(getFirstSectionId());

export const useCurrentSectionId = () => {
  const context = useContext(CurrentSectionIdContext);
  if (!context) {
    throw new Error(
      "El consumidor de la sección actual debe tener un proveedor"
    );
  }
  return context;
};

export default function CurrentSectionIdProvider(props) {
  const [sectionId, setSectionid] = useState(getFirstSectionId());
  const updateSectionId = () => setSectionid(getFirstSectionId());

  const value = useMemo(() => ({ sectionId, setSectionid, updateSectionId }), [
    sectionId,
  ]);
  return <CurrentSectionIdContext.Provider value={value} {...props} />;
}
