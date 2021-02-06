import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import css from "../css/start.module.css";
import Image from "react-bootstrap/Image";
import bgImg from "../img/bb301d108967241.5fc910c5aeb82.png";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <>
      <Row className="vw-100 vh-100 m-0">
        <Col md={12} lg={5}>
          <Container className="px-5 pt-5 h-75">
            <nav data-aos="fade-down">
              <Nav className="align-items-center">
                <Nav.Item className="mr-4">
                  <h3 className="m-0">
                    <i className="fa fa-cube" />
                  </h3>
                </Nav.Item>
                <Nav.Item className="mr-4 text-reset">
                  <Link to="/" className="text-reset">
                    Home
                  </Link>
                </Nav.Item>
                <Nav.Item className="mr-4 text-reset">About us</Nav.Item>
                <Nav.Item className="mr-4 text-reset">Contacts</Nav.Item>
              </Nav>
            </nav>
            <div className="d-flex flex-column justify-content-end h-100">
              <h1
                className={css.title}
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Start with UI quick. Apply in the action.
              </h1>
              <p className="lead" data-aos="fade-up" data-aos-duration="900">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                eveniet ullam aut natus nisi minus autem libero maxime minima
                cum.
              </p>
              <Link
                to="/product"
                className="d-inline-block w-auto text-reset mt-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Get started
                <i className="fa fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </Container>
        </Col>
        <Col
          className="p-0 position-relative d-flex flex-column justify-content-center"
          md={12}
          lg={7}
        >
          <div className={css.overlayImg} />
          <Image
            src={bgImg}
            className="w-100 h-100 position-absolute"
            style={{
              objectFit: "cover",
            }}
            fluid
          />
          <Container className={css.container}>
            <h2 className={css.overlayTitle}>Downloads</h2>
            <Button
              variant="success"
              className="d-block mt-5 rounded-0"
              size="lg"
            >
              Download for windows x64
              <i className="fa fa-windows ml-2"></i>
            </Button>
            <Button
              variant="success"
              className="d-block mt-1 rounded-0"
              size="lg"
            >
              Download for linux
              <i className="fa fa-linux ml-2"></i>
            </Button>
          </Container>
        </Col>
      </Row>
    </>
  );
}
