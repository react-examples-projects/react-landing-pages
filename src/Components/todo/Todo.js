import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import css from "../css/todo.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import ModalSection from "./ModalSection";
import TodoItem from "./TodoItem";
import TodoNavItem from "./TodoNavItem";
import TodoNavItemList from "./TodoNavItemList";
import TodoTaks from "./TodoTasks";
import SectionsTaskProvider from "./context/SectionsTaskProvider";
import { useState } from "react";

export default function Todo() {
  const [show, setShow] = useState(true);
  const [forceUpdate, setForceUpdate] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <SectionsTaskProvider>
        <Container className={css.containerTodo}>
          <Row className={css.rowTodo}>
            <Col sm={4} md={4} lg={3} className="p-0">
              <div className={css.todoNav}>
                <button className={css.btnAddTask} onClick={toggleModal}>
                  <i className="fa fa-plus-circle" />
                </button>
                <Nav className="flex-column">
                  <TodoNavItem name="Importance" icon="star" tasks="2" />
                  <TodoNavItem name="Planned" icon="calendar-alt" tasks="3" />
                  <TodoNavItem name="Life Style" icon="heart" tasks="1" />
                  <TodoNavItem name="Ideas" icon="brain" tasks="0" />
                  <TodoNavItemList forceUpdate={forceUpdate} />
                </Nav>
              </div>
            </Col>

            <Col sm={8} md={8} lg={9} className="p-3">
              <Container>
                <ListGroup variant="flush" className={css.todoTask}>
                  <TodoItem title="Probando con un item" />
                </ListGroup>
                <TodoTaks />
              </Container>
            </Col>
          </Row>
        </Container>
        <ModalSection {...{ show, toggleModal, forceUpdate, setForceUpdate }} />
      </SectionsTaskProvider>
    </>
  );
}
