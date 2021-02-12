import { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import css from "../css/todo.module.css";
import addTask from "./helpers";
import { SectionTaskContext } from "./context/SectionsTaskProvider";

export default function ModalCreateTask({
  showModalCreateTask,
  toggleModalCreateTask,
  getAllTasks,
}) {
  const { sectionId } = useContext(SectionTaskContext);
  const [isValid, setValid] = useState(false);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    const isFormValid = e.target.checkValidity();
    if (!isFormValid) {
      setValid(true);
    } else {
      setValid(true);
      addTask({
        name: task,
        isCompleted: false,
        sectionId,
      });
      toggleModalCreateTask();
      getAllTasks();
      setTask("");
    }
    e.preventDefault();
  };

  return (
    <Modal show={showModalCreateTask} onHide={toggleModalCreateTask} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={isValid} onSubmit={handleSubmit}>
          <Form.Group controlId="task-name">
            <Form.Label>Task name: </Form.Label>
            <Form.Control
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
            <Form.Control.Feedback className="d-block text-muted">
              You task name
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className={css.btnModals} block>
            Create
            <i className="fa fa-angle-double-right ml-2" />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
