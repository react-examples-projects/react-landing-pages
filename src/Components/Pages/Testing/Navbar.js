import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Navbar({ options }) {
  const links = [];
  for (const op of options) {
    links.push(
      <Link to={op.href} style={{ marginRight: "1rem" }} className="text-reset">
        <Button>{op.text}</Button>
      </Link>
    );
  }
  return (
    <>
      <div className="mt-2 mb-2">
        {links}
      </div>

      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/about" target="_blank">
          About us
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
