import {
  Navbar,
  Nav,
  Container,
  Image,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import cs from "classnames";
import css from "./company.module.css";
import waveHeader from "../../img/company-page/wave-header.svg";
import headerImage from "../../img/company-page/header.svg";
import updateSoftware from "../../img/company-page/software_update.svg";
import openSource from "../../img/company-page/open_source.svg";
import helperPeople from "../../img/company-page/helper_people.svg";
import HeaderCard from "./components/HeaderCard";

export default function Header() {
  return (
    <header className="vh-100 text-white">
      <Image
        src={waveHeader}
        alt="Welcome Header"
        className="position-absolute w-100 header-wave"
      />
      <Navbar
        expand="lg"
        className="bg-transparent mt-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            className={cs("font-weight-bold text-white m-0 mr-3", css.title)}
          >
            O.studio
          </Navbar.Brand>
          <Navbar.Toggle className="navbar-toggler" aria-controls="menu" />
          <Navbar.Collapse id="menu">
            <Nav className="justify-content-center w-100 align-items-center">
              <Nav.Link className="text-white" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link
                className="text-dark btn bg-white rounded-pill px-4 ml-auto"
                as={Link}
                to="/started"
              >
                Get Started
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row>
        <Col sm={12} lg={6} data-aos="fade-up" data-aos-duration="2000">
          <h1 className={cs(css.title, "title-header")}>
            We are greatest web & problems solution company
          </h1>
          <Button
            size="lg"
            className="text-dark bg-white mt-5 rounded-0 px-5 py-3"
          >
            Contact us!
          </Button>
        </Col>
        <Col
          sm={6}
          className="d-none d-lg-block position-relative"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            src={headerImage}
            alt="We are the greatest programmers"
            className="w-100 position-absolute header-figure"
            fluid
          />
        </Col>
      </Row>
      <div className="position-relative header-feactures">
        <Row>
          <Col sm={6} md={4} lg={4} className="mb-3">
            <HeaderCard title="Update Software" image={updateSoftware} />
          </Col>
          <Col sm={6} md={4} lg={4} className="mb-3">
            <HeaderCard title="Open Source" image={openSource} />
          </Col>
          <Col sm={12} md={4} lg={4} className="mb-3">
            <HeaderCard title="Helper People" image={helperPeople} />
          </Col>
        </Row>
      </div>
    </header>
  );
}
