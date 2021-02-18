import React from "react";
import { aboutContainer, titles, description } from "../../css/about.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import NavbarMenu from "./Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "./Box";

export default function About() {
  return (
    <Container className={aboutContainer}>
      <NavbarMenu />

      <Row className="mt-5">
        <Col lg={7}>
          <h2 className={titles} data-aos="fade-up">
            <span className="font-weight-light d-block">
              Extremelly intellectual
            </span>
            <span className="font-weight-bold d-block">
              & challenging <br /> projects
            </span>
          </h2>
          <p
            className="font-weight-light"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div data-aos="fade-up" data-aos-delay="350" role="button">
            <Button size="lg" variant="success" className="w-50 mt-5" block>
              Our cases
            </Button>
          </div>
        </Col>

        <Col lg={5} className="position-relative">
          <p className={`${description} mt-4 mt-lg-0`} data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et
            cupiditate iusto modi dicta ipsa explicabo consectetur libero illum
            porro unde eius aperiam magnam, voluptatibus nostrum esse. Id, quo
            exercitationem.
          </p>

          <Box
            icon="film"
            title="Movies"
            number="+300"
            top="60%"
            left="4%"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <Box
            icon="gamepad"
            title="Games"
            number="+1000%"
            top="104%"
            left="30%"
            data-aos="fade-up"
            data-aos-delay="450"
          />
          <Box
            icon="dice-d6"
            title="Programmers"
            number="+105"
            top="150%"
            left="4%"
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </Col>
      </Row>
    </Container>
  );
}
