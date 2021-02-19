import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import css from "../../css/todo.module.css";
import TodoSectionList from "./TodoSectionList";
import TodoTaksList from "./TodoTasksList";
import CurrentSectionIdProvider from "./context/CurrentSectionIdProvider";
import SectionInformationProvider from "./context/SectionInformationProvider";
import useCountSectionTasks from "./hooks/useCountSectionTasks";
import useGetAllTasks from "./hooks/useGetAllTasks";

function Todo() {
  const { countSectionTasks, setCountSectionTasks } = useCountSectionTasks();
  const { tasks, getAllTasks } = useGetAllTasks();

  return (
    <>
      <Container className={css.containerTodo}>
        <Row className={css.rowTodo}>
          <Col sm={4} md={4} lg={3} className="p-0">
            <TodoSectionList
              {...{
                setCountSectionTasks,
              }}
            />
          </Col>
          <Col sm={8} md={8} lg={9} className="p-3">
            <TodoTaksList
              countSectionTasks={countSectionTasks > 0}
              {...{ setCountSectionTasks, tasks, getAllTasks }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

const TodoWrapper = () => (
  <CurrentSectionIdProvider>
    <SectionInformationProvider>
      <Todo />
    </SectionInformationProvider>
  </CurrentSectionIdProvider>
);

export default TodoWrapper;
