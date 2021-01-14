import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function Product() {
  const [perfil, setPerfil] = useState(null);
  const handlePerfilChange = ({ target }) => {
    const file = target.files[0];
    setPerfil(URL.createObjectURL(file));
  };

  return (
    <Container className="mt-5">
      <Form>
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
          <Form.Control type="range" name="coins" min="1" max="200"/>
        </Form.Group>

        <Form.Group controlId="submitForm">
          <Button variant="outline-success" type="submit" block>
            Enviar formulario
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
