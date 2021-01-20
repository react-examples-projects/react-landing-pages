import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";

import { useState } from "react";

export default function Product() {
  const [perfil, setPerfil] = useState(null);
  const handlePerfilChange = ({ target }) => {
    const file = target.files[0];
    setPerfil(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container className="mt-5">
      <Form className="mt-1 mb-4">
        <Form.Group controlId="ex1">
          <Form.Label>Etiqueta label</Form.Label>
          <Form.Control type="email" placeholder="control text" required />
        </Form.Group>

        <Form.Group controlId="ex2">
          <Form.Label>fecha</Form.Label>
          <Form.Control type="date" required />
        </Form.Group>

        <Form.Group controlId="ex2">
          <Form.Label>semana</Form.Label>
          <Form.Control type="week" required />
        </Form.Group>

        <Form.Group controlId="ex2">
          <Form.Label>mes</Form.Label>
          <Form.Control type="month" required />
        </Form.Group>

        <Form.Group controlId="ex2">
          <Form.Label>Rango</Form.Label>
          <Form.Control type="range" onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="ex2">
          <Form.Label>textarea</Form.Label>
          <Form.Control as="textarea" onChange={handleChange} rows="3" required />
        </Form.Group>

        <Form.Group controlId="ex2">
          <Form.Label>Files</Form.Label>
          <Form.File onChange={handleChange} required />
        </Form.Group>

        <Button type="submit">Enviar</Button>
      </Form>

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
