import { useState, useContext, useCallback, useEffect } from "react";
import { getTaskBySection } from "../helpers";
import { CurrentSectionIdContext } from "../context/CurrentSectionIdProvider";

export default function useGetAllTasks() {
  const { sectionId } = useContext(CurrentSectionIdContext);
  const [tasks, setTasks] = useState(getTaskBySection(sectionId));

  const getAllTasks = useCallback(() => {
    setTasks(getTaskBySection(sectionId));
  }, [sectionId]);

  const getAllTasksNotMemo = () => {
    setTasks(getTaskBySection(sectionId));
  };

  useEffect(() => {
    getAllTasks();
  }, [sectionId, getAllTasks]);

  return {
    tasks,
    sectionId,
    getAllTasks,
    getAllTasksNotMemo,
  };
}
