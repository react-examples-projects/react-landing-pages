import { SectionTaskContext } from "./context/SectionsTaskProvider";
import { useContext, useState, useEffect, useCallback } from "react";
import { getTaskBySection } from "./helpers";
import Container from "react-bootstrap/Container";
import TodoItem from "./TodoItem";
import ListGroup from "react-bootstrap/ListGroup";
import css from "../css/todo.module.css";
import ModalCreateTask from "./ModalCreateTask";
import { Link } from "react-router-dom";

export default function TodoTaks(props) {
  const { sectionId } = useContext(SectionTaskContext);
  const [tasks, setTasks] = useState(getTaskBySection(sectionId));
  const [showModalCreateTask, setShowModalCreateTask] = useState(false);

  const toggleModalCreateTask = () => {
    setShowModalCreateTask(!showModalCreateTask);
  };
  const getAllTasks = useCallback(() => {
    setTasks(getTaskBySection(sectionId));
  }, [sectionId]);

  useEffect(() => {
    getAllTasks();
  }, [sectionId, getAllTasks]);

  return (
    <div className={css.taskList}>
      <Container>
        <Link to="#" className={css.btnAddTask} onClick={toggleModalCreateTask}>
          Add task
          <i className="fa fa fa-thumbtack ml-2" />
        </Link>

        <ListGroup variant="flush" className={css.todoTask}>
          {tasks.map((task) => (
            <TodoItem
              {...task}
              {...props}
              key={task.id}
              getAllTasks={getAllTasks}
            />
          ))}
        </ListGroup>
      </Container>

      <ModalCreateTask
        {...{
          showModalCreateTask,
          toggleModalCreateTask,
          getAllTasks,
        }}
      />
    </div>
  );
}
