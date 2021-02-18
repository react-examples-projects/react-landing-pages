import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavbarMenu from "./Navbar";
import Menu from "./Menu";

import {
  brand,
  main,
  title,
  input,
  inputGroup,
  btn,
} from "../../css/explore.module.css";
export default function Explorer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <main role="main" className={main}>
      {isOpen && <Menu {...{ toggleMenu }} />}

      <Row>
        <Col sm={12} md={1} lg={1}>
          <NavbarMenu {...{ toggleMenu, isOpen }} />
        </Col>
        <Col md={11} lg={11}>
          <Container fluid>
            <Navbar>
              <Navbar.Brand>
                <h1 className={`${brand} font-weight-bold`}>Tecno.</h1>
              </Navbar.Brand>
            </Navbar>

            <div>
              <h2 className={`${title} font-weight-bold`}>
                Connecting all <br /> instantly
              </h2>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, hic.
              </p>

              <InputGroup className={`${inputGroup} w-50`} size="lg">
                <FormControl className={`${input} shadow-lg`} />
                <Button className={`${btn} ml-3`}>
                  Let's go!
                  <i className="fa fa-paper-plane ml-2" />
                </Button>
              </InputGroup>
            </div>
          </Container>
        </Col>
      </Row>
    </main>
  );
}
