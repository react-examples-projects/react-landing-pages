import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import css from "../css/todo.module.css";
import TodoNavItemList from "./TodoNavItemList";
import TodoTaks from "./TodoTasks";
import SectionsTaskProvider from "./context/SectionsTaskProvider";

export default function Todo() {
  return (
    <>
      <SectionsTaskProvider>
        <Container className={css.containerTodo}>
          <Row className={css.rowTodo}>
            <Col sm={4} md={4} lg={3} className="p-0">
              <TodoNavItemList />
            </Col>

            <Col sm={8} md={8} lg={9} className="p-3">
              <TodoTaks />
            </Col>
          </Row>
        </Container>
      </SectionsTaskProvider>
    </>
  );
}
