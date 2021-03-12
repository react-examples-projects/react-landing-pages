import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import style from "@emotion/styled";
import Row from "react-bootstrap/Row";
import Product from "./Product";
import { Link } from "react-router-dom";

const Main = style.div`
   margin-top: 7rem;
`;

const Title = style.h2`
   width: 100%;
   max-width: 800px;
   font-size: 3.5em;
`;

const Subtitle = style.p`
   width: 100%;
   max-width: 700px;
   margin-top: 3rem;
`;

export default function Me() {
  return (
    <Container className="mt-5 mb-5">
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link to="/" className="text-reset">
            <strong>solvers</strong> UX audit
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ml-auto">
            <Nav.Link>Case studies</Nav.Link>
            <Nav.Link>How it works</Nav.Link>
            <Nav.Link>Who we are</Nav.Link>
            <Nav.Link
              as={Button}
              style={{ borderRadius: "20px" }}
              className="text-white px-4 ml-4"
            >
              <small>Get your score</small>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Main>
        <Title>
          Building a good product is hard. Building a great one is even hard
        </Title>
        <Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, alias
          ducimus autem iusto distinctio facilis nemo! Deserunt dolores soluta
          maiores reprehenderit, ex aliquid nihil quae quis rem aut eligendi
          exercitationem.
        </Subtitle>

        <Row style={{ marginTop: "7rem" }}>
          <Product title="An example title" />
          <Product title="An example title" />
          <Product title="An example title" />
          <Product title="An example title" />
          <Product title="An example title" />
          <Product title="An example title" />
          <Product title="An example title" />
          <Product title="An example title" />
        </Row>
      </Main>
    </Container>
  );
}
