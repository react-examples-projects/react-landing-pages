import { SectionTaskContext } from "./context/SectionsTaskProvider";
import { useContext, useState } from "react";
import { getTaskBySection } from "./helpers";
import TodoItem from "./TodoItem";

export default function TodoTaks(props) {
  const { sectionId } = useContext(SectionTaskContext);
  const [tasks, setTasks] = useState(getTaskBySection(sectionId));
  const getAllTasks = () => setTasks(getTaskBySection(sectionId));

  return tasks.map((task) => (
    <TodoItem {...task} {...props} key={task.id} getAllTasks={getAllTasks} />
  ));
}
