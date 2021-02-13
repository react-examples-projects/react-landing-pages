import Container from "react-bootstrap/Container";
import TodoItem from "./TodoItem";
import ListGroup from "react-bootstrap/ListGroup";
import TodoOptions from "./TodoOptions";

import css from "../css/todo.module.css";
import useGetAllTasks from "./hooks/useGetAllTasks";

export default function TodoTaks(props) {
  const { tasks, getAllTasks } = useGetAllTasks();

  return (
    <>
      <TodoOptions getAllTasks={getAllTasks} />
      <div className={css.taskList}>
        <Container>
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
      </div>
    </>
  );
}
