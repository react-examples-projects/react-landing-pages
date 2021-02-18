import ListGroup from "react-bootstrap/ListGroup";
import Check from "react-bootstrap/FormCheck";
import css from "../../css/todo.module.css";
import { toggleCompleteTask, deleteTask, getAllSectionTasks } from "./helpers";
import { useState } from "react";
import { useSectionInformation } from "./context/SectionInformationProvider";

function TodoTask({ name, id, isCompleted, sectionId, getAllTasks }) {
  const [isCompleteTask, setIsCompleteTask] = useState(isCompleted);
  const [isFavorite, setFavorite] = useState(false);
  const classNameIsComplete = isCompleteTask ? "text-muted" : "text-dark";
  const classNameStar = isFavorite ? "text-warning" : "text-dark";
  const { setSectionTasks } = useSectionInformation();

  const toggleComplete = () => {
    toggleCompleteTask({ isCompleted: !isCompleteTask, id });
    setIsCompleteTask(!isCompleteTask);
  };

  const toggleFavorite = () => {
    setFavorite(!isFavorite);
  };

  const _deleteTask = () => {
    deleteTask(id, sectionId);
    getAllTasks();
    setSectionTasks(getAllSectionTasks());
  };

  return (
    <ListGroup.Item
      className="bg-transparent d-flex align-content-center"
      action
    >
      <Check
        type="checkbox"
        checked={isCompleteTask}
        onChange={toggleComplete}
        custom
      />
      <span
        className={classNameIsComplete}
        style={{
          textDecoration: isCompleteTask ? "line-through" : "none",
        }}
      >
        {name}
      </span>
      <i
        className={`fa fa-star align-self-center ml-auto ${css.starFavorite} ${classNameStar}`}
        onClick={toggleFavorite}
      />

      <i
        className={`fa fa-trash align-self-center ml-2 ${css.trash}`}
        onClick={_deleteTask}
      />
    </ListGroup.Item>
  );
}

export default TodoTask;
