import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import css from "../css/todo.module.css";
import TodoNavItemList from "./TodoNavItemList";
import TodoTaks from "./TodoTasks";
import SectionsTaskProvider from "./context/SectionsTaskProvider";
import { useState } from "react";
import { getCountSectionTasks } from "./helpers";

export default function Todo() {
  const [countSectionTasks, setCountSectionTasks] = useState(
    getCountSectionTasks()
  );

  return (
    <>
      <Container className={css.containerTodo}>
        <Row className={css.rowTodo}>
          <SectionsTaskProvider>
            <Col sm={4} md={4} lg={3} className="p-0">
              <TodoNavItemList setCountSectionTasks={setCountSectionTasks} />
            </Col>
            <Col sm={8} md={8} lg={9} className="p-3">
              <TodoTaks countSectionTasks={countSectionTasks > 0} />
            </Col>
          </SectionsTaskProvider>
        </Row>
      </Container>
    </>
  );
}
