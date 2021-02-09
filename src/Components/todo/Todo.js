import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import css from "../css/todo.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import ModalSection from "./ModalSection";
import TodoItem from "./TodoItem";
import TodoNavItem from "./TodoNavItem";
import { useState } from "react";

export default function Todo() {
  const [show, setShow] = useState(true);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Container className={css.containerTodo}>
        <Row className={css.rowTodo}>
          <Col lg={3} className="p-0">
            <div className={css.todoNav}>
              <button className={css.btnAddTask} onClick={toggleModal}>
                <i className="fa fa-plus-circle" />
              </button>
              <Nav className="flex-column">
                <TodoNavItem title="Importance" icon="star" count="2" />
                <TodoNavItem title="Planned" icon="calendar-alt" count="3" />
                <TodoNavItem title="Life Style" icon="heart" count="1" />
                <TodoNavItem title="Ideas" icon="brain" count="0" />
              </Nav>
            </div>
          </Col>

          <Col lg={9} className="p-3">
            <Container>
              <ListGroup variant="flush" className={css.todoTask}>
                <TodoItem title="Probando con un item" />
              </ListGroup>
            </Container>
          </Col>
        </Row>
      </Container>
      <ModalSection {...{ show, toggleModal }} />
    </>
  );
}
