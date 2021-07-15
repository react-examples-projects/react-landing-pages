import { Container, Image } from "react-bootstrap";
import blobBgService from "../../img/company-page/blob-bg-service.svg";
import AboutUs from "./AboutUs";
import "./company.css";
import Footer from "./Footer";
import Header from "./Header";
import OurService from "./OurService";
import UserFeedback from "./UserFeedback";
import Blob from "./components/Blob";
import useBody from "../../hooks/useBody";

export default function Company() {
  useBody({
    background: "#eee",
  });
  return (
    <>
      <Container style={{ marginBottom: "3rem" }}>
        <Blob />
        <Blob />
        <Image
          src={blobBgService}
          className="position-absolute bg-services d-none d-lg-block"
          style={{ zIndex: -1 }}
        />

        <Header />
        <AboutUs />
        <OurService />
        <UserFeedback />
      </Container>

      <Footer />
    </>
  );
}
