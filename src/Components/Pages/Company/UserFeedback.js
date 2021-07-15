import { Container, Row, Image, Col } from "react-bootstrap";
import people from "../../img/company-page/people.png";
export default function UserFeedback() {
  return (
    <Container
      className="user-feedback p-3"
      style={{ marginTop: "15rem" }}
      data-aos="fade-up"
      data-aos-duration="2000"
      fluid
    >
      <Row className="py-2">
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center text-center"
        >
          <h2 className="title mb-4 text-white">User feeback</h2>
          <p className="lead text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            perferendis ex perspiciatis tenetur voluptates, velit veniam iusto
            deleniti dignissimos aliquid perspiciatis tenetur voluptates, velit
            veniam iusto deleniti dignissimos aliquid.
          </p>
          <h5
            className="mt-3 border-bottom border-4 pb-2 text-white mx-auto"
            style={{ maxWidth: "150px" }}
          >
            Surja Den Razz
          </h5>
        </Col>

        <Col lg={6} className="d-none d-lg-block">
          <Image src={people} alt="People of us" fluid />
        </Col>
      </Row>
    </Container>
  );
}
