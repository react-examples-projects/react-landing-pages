import Nav from "react-bootstrap/Nav";
import menuClose from "../../img/menu.png";
import menuOpen from "../../img/close.png";
import {
  rotate,
  menuImg,
  menuToggler,
  socialMedia,
  pagination,
  hoverLink,
} from "../../css/explore.module.css";

export default function NavbarMenu({ toggleMenu, isOpen }) {
  return (
    <Nav className="h-100  justify-content-around align-items-md-center justify-content-md-center justify-content-lg-center align-items-md-start align-items-lg-start">
      <div className={menuToggler}>
        <label htmlFor="toggler" onClick={toggleMenu}>
          <img
            src={isOpen ? menuOpen : menuClose}
            alt="Menu options"
            className={menuImg}
          />
        </label>
      </div>
      <div className={pagination}>
        <Nav.Link
          className={`text-uppercase text-reset ${rotate} ${hoverLink}`}
        >
          <div className="d-flex align-items-center">
            <span className="mr-2">next</span>
            <i className="fa fa-long-arrow-alt-right" />
          </div>
        </Nav.Link>

        <Nav.Link
          className={`mt-0 mt-md-5 mt-lg-5 text-uppercase text-reset ${rotate} ${hoverLink}`}
        >
          <div className="d-flex align-items-center">
            <i className="fa fa-long-arrow-alt-left" />
            <span className="ml-2">prev</span>
          </div>
        </Nav.Link>
      </div>

      <div className={socialMedia}>
        <Nav.Link className={`text-center ${hoverLink}`}>
          <i className="fa fa-facebook-f mb-md-2 mb-lg-2" />
        </Nav.Link>

        <Nav.Link className={`text-center ${hoverLink}`}>
          <i className="fa fa-pinterest-p mb-md-2 mb-lg-2" />
        </Nav.Link>

        <Nav.Link className={`text-center ${hoverLink}`}>
          <i className="fa fa-twitter mb-md-2 mb-lg-2" />
        </Nav.Link>

        <Nav.Link className={`text-center ${hoverLink}`}>
          <i className="fa fa-instagram  mb-md-4 mb-lg-2" />
        </Nav.Link>

        <Nav.Link className={`text-uppercase text-reset ${rotate} ${hoverLink}`}>
          <span className="ml-2">share</span>
        </Nav.Link>
      </div>
    </Nav>
  );
}
