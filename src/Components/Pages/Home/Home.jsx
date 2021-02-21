import Navbar from "./Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "../../css/vendors/css/all.min.css";
import useBackground from "../../hooks/useBackground";
//import Routers from "./Routers";
import placeholder from "../../img/placeholder.png";
export default function Home() {
  useBackground();

  return (
    <Row className="vh-100 vw-100 m-0">
      <Col className="p-0 m-0" md={4} lg={3}>
        <Navbar />
      </Col>
      <Col className="p-0 m-0" md={8} lg={9}>
        <Container className="px-5">
          <h1 className="mt-5 font-weight-bold">Libardo Rengifo</h1>
          <h2 className="mt-2">¿Qué tal?</h2>

          <div className="mt-5">
            <Row>
              <Col>
                <p className="lead text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid possimus hic consequatur aut et officiis deserunt
                  corrupti, velit impedit soluta nulla saepe similique
                  recusandae quasi repellendus veniam maxime perspiciatis
                  numquam.
                </p>

                <p className="lead text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid possimus hic consequatur aut et officiis deserunt
                  corrupti, velit impedit soluta nulla saepe similique
                  recusandae quasi repellendus veniam maxime perspiciatis
                  numquam.
                </p>
              </Col>
              <Col>
                <Image src={placeholder} className="w-100" fluid />
              </Col>
            </Row>
          </div>
        </Container>
      </Col>
    </Row>
  );
}
