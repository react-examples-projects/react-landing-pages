import { Container, Row, Col, Image, Button } from "react-bootstrap";
import css from "./company.module.css";
import img1 from "../../img/company-page/img1.jpg";
export default function AboutUs() {
  return (
    <Container
      style={{ marginTop: "20rem" }}
      data-aos="fade-up"
      data-aos-duration="2000"
      fluid
    >
      <Row>
        <Col lg={6} className="d-none d-lg-block position-relative">
          <Image
            src={img1}
            alt="We are a awesome company"
            className="section-image"
            fluid
          />
          <div className="section-image-rect" />
        </Col>

        <Col
          md={12}
          lg={6}
          className="
            pl-5
            d-flex
            flex-column
            justify-content-center
          "
        >
          <div className="pl-4">
            <h2 className={css.title}>
              It is a long established fact that a reader
            </h2>
            <p className="lead mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              fugit. Fugit, sequisit, amet consectetur adipisicing elit.
              Nostrum, fugit. Fugit, sequi?
            </p>
            <Button size="lg" className="w-auto mt-3 rounded-0 py-3 px-5">
              About us
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
