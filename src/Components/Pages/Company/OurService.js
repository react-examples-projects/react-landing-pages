import { Container, Row, Col } from "react-bootstrap";
import css from "./company.module.css";
import ServiceCard from "./components/ServiceCard";
import computer from "./icons/computer.svg";
import networking from "./icons/networking.svg";
import rss from "./icons/rss.svg";

export default function OurService() {
  return (
    <Container
      style={{ marginTop: "25rem" }}
      data-aos="fade-up"
      data-aos-duration="2000"
      fluid
    >
      <Row>
        <Col md={12} lg={6}>
          <Row>
            <Col className="col-12 col-lg-6">
              <ServiceCard
                title="Web Design"
                icon={computer}
                data-aos="fade-up"
                data-aos-delay="500"
              />
              <ServiceCard
                title="Social Media"
                icon={rss}
                data-aos="fade-up"
                data-aos-delay="600"
              />
            </Col>

            <Col
              sm={12}
              lg={6}
              className=" d-flex justify-content-center align-items-center"
            >
              <ServiceCard
                title="Networking"
                icon={networking}
                data-aos="fade-up"
                data-aos-delay="1000"
              />
            </Col>
          </Row>
        </Col>

        <Col
          md={{
            span: 12,
            order: "first",
          }}
          lg={{
            span: 6,
            order: "last",
          }}
          className="
            d-flex
            flex-column
            justify-content-center
            ps-5
            mb-5 mb-lg-0
          "
        >
          <h2 className={css.title}>Our Best Service</h2>
          <p className="lead mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
            fugit. Fugit, sequisit, amet consectetur adipisicing elit. Nostrum,
            fugit. Fugit, sequi?
          </p>
        </Col>
      </Row>
    </Container>
  );
}
