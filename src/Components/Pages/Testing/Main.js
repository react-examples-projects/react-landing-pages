import React, { useReducer } from "react";

import ErrorBoundary from "../../ErrorBoundary";
import userReducer from "../../reducers/userReducer";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import Navbar from "./Navbar";
import Dropdowns from "./Dropdowns";
import Cards from "./Cards";
import Profiles from "./Profiles";

const links = [
  {
    text: "Registrarse",
    href: "/signup",
  },
  {
    text: "Logearse",
    href: "/login",
  },
];
export default function TestingLazy() {
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
        <Navbar options={links} />

        <Profiles />

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

        <Dropdowns />
        <Cards />
      </ErrorBoundary>
    </Container>
  );
}
