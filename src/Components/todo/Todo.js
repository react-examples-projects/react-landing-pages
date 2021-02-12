import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import css from "../css/todo.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import ModalCreateTask from "./ModalCreateTask";
import TodoNavItemList from "./TodoNavItemList";
import TodoTaks from "./TodoTasks";
import SectionsTaskProvider from "./context/SectionsTaskProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Todo() {
  const [showModalCreateTask, setShowModalCreateTask] = useState(false);

  const toggleModalCreateTask = () => {
    setShowModalCreateTask(!showModalCreateTask);
  };

  return (
    <>
      <SectionsTaskProvider>
        <Container className={css.containerTodo}>
          <Row className={css.rowTodo}>
            <Col sm={4} md={4} lg={3} className="p-0">
              <TodoNavItemList />
            </Col>

            <Col sm={8} md={8} lg={9} className="p-3">
              <Container>
                <Link
                  to="#"
                  className={css.btnAddTask}
                  onClick={toggleModalCreateTask}
                >
                  Add task
                  <i className="fa fa fa-thumbtack ml-2" />
                </Link>

                <ListGroup variant="flush" className={css.todoTask}>
                  <TodoTaks />
                </ListGroup>
              </Container>
            </Col>
          </Row>
        </Container>

        <ModalCreateTask
          {...{
            showModalCreateTask,
            toggleModalCreateTask,
          }}
        />
      </SectionsTaskProvider>
    </>
  );
}
