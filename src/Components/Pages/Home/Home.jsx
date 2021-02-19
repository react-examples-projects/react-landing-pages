import Navbar from "./Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../css/vendors/css/all.min.css";
import useBackground from "../../hooks/useBackground";
import Routers from "./Routers";

export default function Home() {
  useBackground();

  return (
    <Row className="vh-100 vw-100 m-0">
      <Col className="p-0 m-0" md={4} lg={3}>
        <Navbar />
      </Col>
      <Col className="p-0 m-0" md={8} lg={9}>
       
      </Col>
    </Row>
  );
}
