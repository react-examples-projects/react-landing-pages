import { useState, useContext, useCallback, useEffect } from "react";
import { getTaskBySection } from "../helpers";
import { SectionTaskContext } from "../context/SectionsTaskProvider";

export default function useGetAllTasks() {
  const { sectionId } = useContext(SectionTaskContext);
  const [tasks, setTasks] = useState(getTaskBySection(sectionId));

  const getAllTasks = useCallback(() => {
    setTasks(getTaskBySection(sectionId));
  }, [sectionId]);

  useEffect(() => {
    getAllTasks();
   
  }, [sectionId, getAllTasks]);

  return {
    tasks,
    sectionId,
    getAllTasks,
  };
}
