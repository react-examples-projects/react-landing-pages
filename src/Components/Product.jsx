import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import InputGroup from "react-bootstrap/InputGroup";
import Figure from "react-bootstrap/Figure";
import Jumbotron from "react-bootstrap/Jumbotron";
import LisGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [perfil, setPerfil] = useState(null);
  const [isFormValid, setFormValid] = useState(false);
  const [isOpenFormLong, setOpenFormLong] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const ModalTest = () => (
    <Modal
      show={isModalOpen}
      onHide={toggleModal}
      backdrop="static"
      centered
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Título</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, necessitatibus.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">Crear</Button>
        <Button variant="danger">Eliminar</Button>
      </Modal.Footer>
    </Modal>
  );
  const handlePerfilChange = ({ target }) => {
    const file = target.files[0];
    setPerfil(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    const isValid = e.target.checkValidity();
    if (!isValid) {
      setFormValid(false);
      e.preventDefault();
    }
    setFormValid(true);
  };

  return (
    <Container className="mt-5">
      <ModalTest />
      <Button onClick={toggleModal}>Abrir modal</Button>
      <Jumbotron>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <p className="lead mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
          reiciendis?
        </p>
      </Jumbotron>
      <Row>
        <Col>
          <Figure className="w-100">
            <Figure.Image
              fluid
              className="w-100"
              src="https://steamuserimages-a.akamaihd.net/ugc/862858849824053740/B2EFDD79C79D2E1E8D91FDA2976A96C48723F792/"
            />
            <Figure.Caption>
              Lorem ipsum dolor sit amet consectetur.
            </Figure.Caption>
          </Figure>
        </Col>

        <Col>
          <Figure className="w-100">
            <Figure.Image
              fluid
              className="w-100"
              src="https://steamuserimages-a.akamaihd.net/ugc/862858849824053740/B2EFDD79C79D2E1E8D91FDA2976A96C48723F792/"
            />
            <Figure.Caption>
              Lorem ipsum dolor sit amet consectetur.
            </Figure.Caption>
          </Figure>
        </Col>

        <Col>
          <Figure className="w-100">
            <Figure.Image
              fluid
              className="w-100"
              src="https://steamuserimages-a.akamaihd.net/ugc/862858849824053740/B2EFDD79C79D2E1E8D91FDA2976A96C48723F792/"
            />
            <Figure.Caption>
              Lorem ipsum dolor sit amet consectetur.
            </Figure.Caption>
          </Figure>
        </Col>

        <Col>
          <Figure className="w-100">
            <Figure.Image
              fluid
              className="w-100"
              src="https://steamuserimages-a.akamaihd.net/ugc/862858849824053740/B2EFDD79C79D2E1E8D91FDA2976A96C48723F792/"
            />
            <Figure.Caption>
              Lorem ipsum dolor sit amet consectetur.
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <LisGroup variant="flush">
            <LisGroup.Item action href="#d" variant="primary">
              sldfkdslflfdlkdsf
            </LisGroup.Item>
            <LisGroup.Item variant="danger">sldfkdslflfdlkdsf</LisGroup.Item>
            <LisGroup.Item variant="secondary">sldfkdslflfdlkdsf</LisGroup.Item>
          </LisGroup>
        </Col>
        <Col>
          <LisGroup horizontal>
            <LisGroup.Item action href="#d">
              sldfkdslflfdlkdsf
            </LisGroup.Item>
            <LisGroup.Item>sldfkdslflfdlkdsf</LisGroup.Item>
            <LisGroup.Item>sldfkdslflfdlkdsf</LisGroup.Item>
          </LisGroup>
          <LisGroup horizontal>
            <LisGroup.Item action href="#d">
              sldfkdslflfdlkdsf
            </LisGroup.Item>
            <LisGroup.Item>sldfkdslflfdlkdsf</LisGroup.Item>
            <LisGroup.Item>sldfkdslflfdlkdsf</LisGroup.Item>
          </LisGroup>
        </Col>
      </Row>

      <Accordion>
        <Accordion.Toggle
          id="formLong"
          eventKey="4"
          as={Button}
          variant="warning"
          onClick={() => setOpenFormLong(!isOpenFormLong)}
        >
          Formulario largo
          <i
            className={`fa fa-caret-${isOpenFormLong ? "down" : "right"} ml-2`}
          />
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="4">
          <Form
            className="mt-1 mb-4"
            onSubmit={handleSubmit}
            noValidate
            validated={isFormValid}
          >
            <Row>
              <Col>
                <Form.Group controlId="ex1">
                  <Form.Label>Etiqueta label</Form.Label>

                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i className="fa fa-user" />
                      </InputGroup.Text>
                      <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="email"
                      placeholder="control text"
                      required
                    />
                  </InputGroup>

                  <Form.Text className="text-success">
                    Lorem ipsum dolor sit.
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="ex2">
                  <Form.Label>fecha</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i className="fa fa-calendar-week" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>

                    <Form.Control type="date" required />
                  </InputGroup>
                  <Form.Text muted>
                    Lorem ipsum dolor sit amet consectetur.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="ex4">
                  <Form.Label>mes</Form.Label>

                  <InputGroup size="lg">
                    <Form.Control type="month" required isValid />
                    <InputGroup.Append>
                      <InputGroup.Text>
                        <i className="fa fa-calendar-alt" />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>

                  <Form.Control.Feedback tooltip>
                    Lorem ipsum dolor sit amet.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="ex5">
                  <Form.Label>Rango</Form.Label>
                  <Form.Control
                    type="range"
                    onChange={handleChange}
                    required
                    custom
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="ex6">
                  <Form.Label>textarea</Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={handleChange}
                    rows="3"
                    required
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="ex7">
                  <Form.Label>Files</Form.Label>
                  <Form.File onChange={handleChange} required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="ex8" as={Row}>
                  <Col>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      //readOnly
                      // plaintext
                      type="text"
                      placeholder="zNareak"
                      defaultValue="zNareak"
                      required
                    />
                  </Col>

                  <Col>
                    <Form.Check
                      type="checkbox"
                      label="Matener"
                      id="dwe#E_#"
                      custom
                    />
                    <Form.Check
                      type="radio"
                      label="Ocultar"
                      id="dwe#E4_#"
                      custom
                    />
                  </Col>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="ex3">
                  <Form.Label>semana</Form.Label>
                  <Form.Control type="week" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Check
                id="sons"
                type="checkbox"
                label="Tiene hijos?"
                isValid
                custom
              />
              <Form.Check id="house" type="radio" label="Tiene Casa?" custom />
              <Form.Check id="theme" type="switch" label="Modo oscuro" />
            </Form.Group>
            <Button type="submit" block>
              Enviar
            </Button>
          </Form>
        </Accordion.Collapse>
      </Accordion>
      <Accordion>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Dropdowns
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <>
            <DropdownButton title="Variantes">
              <Dropdown.Item>Ruy López</Dropdown.Item>
              <Dropdown.Item>Siciliana</Dropdown.Item>
              <Dropdown.Item>Francesa</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              title="Probando"
              drop="right"
              className="mt-4"
              size="sm"
              variant="outline-primary"
            >
              <Dropdown.Item eventKey="valor1">Valor 1</Dropdown.Item>
              <Dropdown.Item eventKey="valor2">Valor 2</Dropdown.Item>
              <Dropdown.Item eventKey="valor3">Valor 3</Dropdown.Item>
            </DropdownButton>
          </>
        </Accordion.Collapse>
        <br />

        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          Mostrar formulario
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Form className="mt-3">
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Tu correo"
                required={true}
              />
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label>País</Form.Label>
              {/* se usa `as` para establecer otros tipos de campos */}
              <Form.Control as="select" name="country" require="true">
                <option>Venezuela</option>
                <option>Canadá</option>
                <option>México</option>
                <option>Brasil</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="products">
              <Form.Label>Productos</Form.Label>
              {/* se usa `as` para establecer otros tipos de campos */}
              <Form.Control as="select" name="products" multiple require="true">
                <option>Café</option>
                <option>Leche</option>
                <option>Harina</option>
                <option>Azúcar</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="suggestions">
              <Form.Label>Sugerencias</Form.Label>
              <Form.Control
                size="lg"
                as="textarea"
                placeholder="Tus sugerencias o recomendaciones"
                required={true}
              />
            </Form.Group>

            <Form.Group controlId="perfil" as={Row}>
              <Col lg={2}>
                <img
                  src={
                    perfil ||
                    "https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png"
                  }
                  className="img-fluid"
                />
              </Col>
              <Col lg={10}>
                <Form.Label>Imágen de perfil</Form.Label>
                <Form.File accept="image/*" onChange={handlePerfilChange} />
              </Col>
            </Form.Group>

            <Form.Group controlId="token">
              <Form.Control
                type="text"
                name="token"
                value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                readOnly
                required={true}
              />
            </Form.Group>

            <Form.Group controlId="coins">
              <Form.Label>Dinero:</Form.Label>
              <Form.Control type="range" name="coins" min="1" max="200" />
            </Form.Group>

            <Form.Group controlId="submitForm">
              <Button variant="outline-success" type="submit" block>
                Enviar formulario
              </Button>
            </Form.Group>
          </Form>
        </Accordion.Collapse>
      </Accordion>
    </Container>
  );
}
