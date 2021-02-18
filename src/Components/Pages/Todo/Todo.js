import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import css from "../../css/todo.module.css";
import TodoSectionList from "./TodoSectionList";
import TodoTaksList from "./TodoTasksList";
import CurrentSectionIdProvider from "./context/CurrentSectionIdProvider";
import SectionInformationProvider from "./context/SectionInformationProvider";
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
          <CurrentSectionIdProvider>
            <SectionInformationProvider>
              <Col sm={4} md={4} lg={3} className="p-0">
                <TodoSectionList
                  {...{
                    setCountSectionTasks,
                  }}
                />
              </Col>
              <Col sm={8} md={8} lg={9} className="p-3">
                <TodoTaksList countSectionTasks={countSectionTasks > 0} />
              </Col>
            </SectionInformationProvider>
          </CurrentSectionIdProvider>
        </Row>
      </Container>
    </>
  );
}
