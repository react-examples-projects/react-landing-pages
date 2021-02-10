import { SectionTaskContext } from "./context/SectionsTaskProvider";
import { useContext } from "react";

export default function TodoTaks() {
  const { sectionId } = useContext(SectionTaskContext);
  return <h1>Id actual {sectionId}</h1>;
}
