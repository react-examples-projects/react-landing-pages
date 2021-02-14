import Container from "react-bootstrap/Container";
import TodoTask from "./TodoTask";
import ListGroup from "react-bootstrap/ListGroup";
import TodoOptions from "./TodoOptions";
import css from "../css/todo.module.css";
import useGetAllTasks from "./hooks/useGetAllTasks";
import Image from "react-bootstrap/Image";
import emptyTasks from "./img/empty_tasks.png";

export default function TodoTaksList({
  countSectionTasks,
  setSectionTasks,
  ...props
}) {
  const { tasks, getAllTasks } = useGetAllTasks();
  const tasksLength = tasks?.length > 0;

  return (
    <>
      {countSectionTasks && (
        <TodoOptions
          {...{
            getAllTasks,
            setSectionTasks,
          }}
        />
      )}
      <div className={css.taskList}>
        {tasksLength ? (
          <Container>
            <ListGroup variant="flush" className={css.todoTask}>
              {tasks.map((task) => (
                <TodoTask
                  {...task}
                  {...props}
                  key={task.id}
                  getAllTasks={getAllTasks}
                />
              ))}
            </ListGroup>
          </Container>
        ) : (
          <>
            <div className="d-flex align-items-center h-100 w-100 mt-4">
              <Image src={emptyTasks} width="200px" fluid />
              <h5 className="text-center">¡Parece ser que no tienes tareas!</h5>
            </div>
          </>
        )}
      </div>
    </>
  );
}
