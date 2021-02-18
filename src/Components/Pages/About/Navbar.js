import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { brand } from "../../css/about.module.css";

export default function NavbarMenu() {
  return (
    <Navbar>
      <Navbar.Brand>
        <h1 className={`${brand} mb-0`}>Future</h1>
      </Navbar.Brand>

      <Nav className="ml-auto">
        <Nav.Link>
          <Button variant="outline-success" block>
            About us
          </Button>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
