import { Container, Col, Row, Image, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

import useBody from "../hooks/useBody";
import projects from "./projects";

export default function Index() {
  useBody({ background: "#eeeeeec4" });

  return (
    <Container className="my-4 w-75" fluid>
      <Jumbotron>
        <h3>Minimalist Landing Pages with ReactJS</h3>
        <p className="text-muted p-0">
          A group of landing pages and others web applications with reactjs
          using react-booststrap.
        </p>
      </Jumbotron>

      <Row className="mt-5">
        {projects.map((project, i) => {
          return (
            <Col
              as="a"
              href={project.to}
              lg={4}
              className="mb-5"
              key={project.preview}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-duration={i * 100}
              data-aos-offset="0"
            >
              <Image
                src={project.preview}
                className="w-100 h-100 rounded-lg"
                alt={project.name}
                fluid
              />
              <p className="mt-2 text-muted">{project.name}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
