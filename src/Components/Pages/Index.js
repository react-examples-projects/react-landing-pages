import { Container, Col, Row, Image, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

import useBody from "../hooks/useBody";
import projects from "./projects";

export default function Index() {
  useBody({ background: "#eeeeeec4" });

  return (
    <Container className="my-4 w-75" fluid>
      <Jumbotron className="jumbotron-banner text-white">
        <h3>Minimalist Landing Pages with ReactJS</h3>
        <p className="p-0">
          A group of landing pages and others web applications with reactjs
          using react-booststrap.
        </p>
        <small className="d-block">
          You can see more here:
          <a
            href="https://portfolio-znareak.vercel.app/"
            className="text-reset d-inline-block ml-1 font-weight-bold"
          >
            portfolio
          </a>
        </small>
      </Jumbotron>

      <Row className="mt-5">
        {projects.map((project, i) => {
          return (
            <Col
              as="a"
              href={project.to}
              lg={4}
              className="mb-2 p-0"
              key={project.preview}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-duration={i * 100}
              data-aos-offset="0"
            >
              <div className="bg-white m-1 p-3 py-1 h-100 rounded-lg shadow-sm">
                <p className="text-muted mb-0">
                  <small>{project.title}</small>
                </p>
                <Image
                  src={project.preview}
                  className="w-100 h-100"
                  alt={project.name}
                  fluid
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
