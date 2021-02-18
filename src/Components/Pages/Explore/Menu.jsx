import { menu, menuImg, menuImgBlack, menuNav } from "../../css/explore.module.css";
import { Link } from "react-router-dom";
import menuOpen from "../../img/close.png";

export default function Menu({ toggleMenu }) {
  return (
    <div className={menu}>
      <label onClick={toggleMenu}>
        <img
          src={menuOpen}
          alt="Menu options"
          className={`${menuImg} ${menuImgBlack}`}
        />
      </label>
      <nav className={menuNav}>
        <Link>Downloads</Link>
        <Link>About</Link>
        <Link>Home Page</Link>
      </nav>
    </div>
  );
}
