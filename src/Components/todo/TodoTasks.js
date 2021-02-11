import { SectionTaskContext } from "./context/SectionsTaskProvider";
import { useContext } from "react";
import { getTaskBySection } from "./helpers";
import TodoItem from "./TodoItem";

export default function TodoTaks() {
  const { sectionId } = useContext(SectionTaskContext);
  const tasks= getTaskBySection(sectionId);
  return tasks.map((task) => <TodoItem {...task} key={task.id} />);
}
