import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import css from "../css/todo.module.css";

export default function ModalCreateSection({
  showModalSectionTask,
  toggleModalSectionTask,
  addSectionTaskState,
}) {
  const [isValid, setValid] = useState(false);
  const [taskSection, setTaskSection] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {
    const isFormValid = e.target.checkValidity();
    if (!isFormValid) {
      setValid(true);
    } else {
      setValid(true);
      addSectionTaskState({
        name: taskSection,
        icon,
        tasks: 0,
      });

      toggleModalSectionTask();
      setTaskSection("");
      setIcon("");
    }

    e.preventDefault();
  };

  return (
    <Modal show={showModalSectionTask} onHide={toggleModalSectionTask} centered>
      <Modal.Header closeButton>
        <Modal.Title>New Task Section</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={isValid} onSubmit={handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Group controlId="section">
                <Form.Label>Task Section Name: </Form.Label>
                <Form.Control
                  type="text"
                  value={taskSection}
                  onChange={(e) => setTaskSection(e.target.value)}
                  required
                />
                <Form.Control.Feedback className="d-block text-muted">
                  You custom taskSection section
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="section-icon">
                <Form.Label>Fontawesome Icon: </Form.Label>
                <Form.Control
                  type="text"
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  required
                />
                <Form.Control.Feedback className="d-block text-muted">
                  You should write a icon from fontawesome kit icons.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Form.Row>
          <Button type="submit" className={css.btnModals} block>
            Create
            <i className="fa fa-angle-double-right ml-2" />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
