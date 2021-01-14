import React, { Suspense, useReducer } from "react";
import { Link } from "react-router-dom";
import { fetchProfileData } from "../fakeApi";
import { LoadingProfilePage, LoadingProfileTime } from "./LoadingsComponents";
import ErrorBoundary from "./ErrorBoundary";
import userReducer from "./reducers/userReducer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Media from "react-bootstrap/Media";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import DropdownButton from "react-bootstrap/DropdownButton";

// ¡Comienza a cargar los datos con antelación!
const resource = fetchProfileData();

export default function ProfilePage() {
  const [state, dispatch] = useReducer(userReducer, {});

  const update = () => {
    dispatch({
      type: "set",
      payload: {
        name: "libardo",
        create_at: new Date().toLocaleString(),
        token: "SAI3489R93IUWE",
      },
    });

    console.log(state);
  };

  return (
    <Container>
      <ErrorBoundary>
        <div className="mt-2 mb-5">
          <Link
            to="/signup"
            style={{ marginRight: "1rem" }}
            className="text-reset"
          >
            <Button>Registrarse</Button>
          </Link>

          <Link
            to="/login"
            style={{ marginRight: "1rem" }}
            className="text-reset"
          >
            <Button variant="outline-primary">Iniciar sesión</Button>
          </Link>
        </div>

        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/about" target="_blank">
            About us
          </Breadcrumb.Item>
        </Breadcrumb>

        <ErrorBoundary message="Error en ProfileDetails">
          <Suspense fallback={<LoadingProfilePage />}>
            <ProfileDetails />

            <ErrorBoundary message="Error en ProfileTimeLine">
              <Suspense fallback={<LoadingProfileTime />}>
                <ProfileTimeline />
              </Suspense>
            </ErrorBoundary>
          </Suspense>
        </ErrorBoundary>

        <Button onClick={update} style={{ marginTop: "2rem" }}>
          Cambiar estado
        </Button>

        <Accordion className="mt-3" defaultActiveKey="0">
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Ver más...
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <p className="mt-2">
              <small>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore id magni iure praesentium recusandae, soluta rem error
                dolore corporis officia aut neque, placeat quia, nam eius esse
                minima quos facilis.
              </small>
            </p>
          </Accordion.Collapse>
        </Accordion>

        <ButtonToolbar>
          <ButtonGroup className="mt-3 mr-2" size="sm" vertical>
            <Button variant="warning">Boton 1</Button>
            <Button variant="danger">Buscar</Button>
          </ButtonGroup>

          <ButtonGroup className="mt-3" size="sm" vertical>
            <Button variant="warning">Boton 1</Button>
            <Button variant="danger">Buscar</Button>
          </ButtonGroup>
        </ButtonToolbar>

        <Dropdown className="mt-3" drop="up">
          <Dropdown.Toggle variant="link" id="drop1">Opciones</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Opcion 1</Dropdown.Item>
            <Dropdown.Item>Opcion 2</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Opcion 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <SplitButton variant="dark" title="Mas opciones" className="mt-3">
          <Dropdown.Item>Opcion 1</Dropdown.Item>
          <Dropdown.Item>Opcion 2</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Opcion 3</Dropdown.Item>
        </SplitButton>

        <DropdownButton variant="success" title="Descargas" className="mt-3">
          <Dropdown.Item>Opcion</Dropdown.Item>
          <Dropdown.Item>Opcion</Dropdown.Item>
          <Dropdown.Item>Opcion</Dropdown.Item>
          <Dropdown.Item>Opcion</Dropdown.Item>
        </DropdownButton>

        <Card body className="mt-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, est.
          </p>
        </Card>

        <Row className="mt-4">
          <Col>
            <Card border="primary">
              <Card.Header>Lorem, ipsum.</Card.Header>
              <Card.Img src="https://picsum.photos/200/100" />
              <Card.Body>
                <Card.Title>Lorem, ipsum dolor.</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">
                  Lorem ipsum dolor sit.
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat, eum?
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="link" href="#list-users">
                  Ver listas
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card border="success">
              <Card.Header>
                <Card.Title>Lorem, ipsum dolor.</Card.Title>
                <Card.Subtitle className="text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatum, distinctio.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent">
                <Button variant="success" block>
                  Accept
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "3rem" }}>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176e23bf254%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176e23bf254%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2214.5625%22%20y%3D%2237.1%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Generic placeholder"
              />
              <Media.Body>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde eligendi repudiandae ab a iusto! Est aut tempore
                    explicabo blanditiis eaque?
                  </small>
                </p>
              </Media.Body>
            </Media>
          </Col>

          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176e23bf254%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176e23bf254%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2214.5625%22%20y%3D%2237.1%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Generic placeholder"
              />
              <Media.Body>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde eligendi repudiandae ab a iusto! Est aut tempore
                    explicabo blanditiis eaque?
                  </small>
                </p>
              </Media.Body>
            </Media>
          </Col>

          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176e23bf254%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176e23bf254%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2214.5625%22%20y%3D%2237.1%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Generic placeholder"
              />
              <Media.Body>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde eligendi repudiandae ab a iusto! Est aut tempore
                    explicabo blanditiis eaque?
                  </small>
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </ErrorBoundary>
    </Container>
  );
}

function ProfileDetails() {
  // Intenta leer la información del usuario, aunque puede no haberse cargado aún
  const user = resource.user.read();
  return <h2>{user.title}</h2>;
}

function ProfileTimeline() {
  // Intenta leer las publicaciones, aunque puede que no se hayan cargado aún
  const postsArray = resource.posts.read();
  const render = (post, i) => {
    return (
      <Media as="li" className="mb-2" key={i}>
        <img
          width={40}
          height={40}
          className="mr-3"
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176e23bf254%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176e23bf254%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2214.5625%22%20y%3D%2237.1%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          alt={post.name}
        />
        <Media.Body>
          <p className="float-left mr-1">{post.name}</p>
          {i % 2 === 0 && (
            <Badge pill variant="success">
              Nuevo
            </Badge>
          )}
        </Media.Body>
      </Media>
    );
  };
  const posts = postsArray.map(render);

  return <ul className="list-unstyled">{posts}</ul>;
}
