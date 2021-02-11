import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import css from "../css/todo.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import ModalCreateSection from "./ModalCreateSection";
import ModalCreateTask from "./ModalCreateTask";
import TodoNavItem from "./TodoNavItem";
import TodoNavItemList from "./TodoNavItemList";
import TodoTaks from "./TodoTasks";
import SectionsTaskProvider from "./context/SectionsTaskProvider";
import { useState } from "react";

export default function Todo() {
  const [showModalSectionTask, setShowModalSectionTask] = useState(false);
  const [showModalCreateTask, setShowModalCreateTask] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);

  const toggleModalSectionTask = () => {
    setShowModalSectionTask(!showModalSectionTask);
  };

  const toggleModalCreateTask = () => {
    setShowModalCreateTask(!showModalCreateTask);
  };

  return (
    <>
      <SectionsTaskProvider>
        <Container className={css.containerTodo}>
          <Row className={css.rowTodo}>
            <Col sm={4} md={4} lg={3} className="p-0">
              <div className={css.todoNav}>
                <button
                  className={css.btnAddSectionTask}
                  onClick={toggleModalSectionTask}
                >
                  <i className="fa fa-plus-circle" />
                </button>
                <Nav className="flex-column">
                  <TodoNavItem name="Importance" icon="star" tasks="2" />
                  <TodoNavItemList forceUpdate={forceUpdate} />
                </Nav>
              </div>
            </Col>

            <Col sm={8} md={8} lg={9} className="p-3">
              <Container>
                <a
                  href="#"
                  className={css.btnAddTask}
                  onClick={toggleModalCreateTask}
                >
                  Add task
                  <i className="fa fa fa-thumbtack ml-2" />
                </a>

                <ListGroup variant="flush" className={css.todoTask}>
                  <TodoTaks />
                </ListGroup>
              </Container>
            </Col>
          </Row>
        </Container>
        <ModalCreateSection
          {...{
            showModalSectionTask,
            toggleModalSectionTask,
            forceUpdate,
            setForceUpdate,
          }}
        />
        <ModalCreateTask {...{ showModalCreateTask, toggleModalCreateTask }} />
      </SectionsTaskProvider>
    </>
  );
}
