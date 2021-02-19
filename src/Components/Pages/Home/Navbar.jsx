import { memo } from "react";
import { NavLink } from "react-router-dom";
import css from "../../css/home.module.css";

function Navbar() {
  return (
    <nav role="navigation" className={css.nav}>
      <NavLink to="/" activeClassName="active-link">
        Sobre mí
      </NavLink>

      <NavLink to="/#" activeClassName="active-link">
        Proyectos
      </NavLink>

      <NavLink to="/#" activeClassName="active-link">
        Habilidades
      </NavLink>

      <NavLink to="/#" activeClassName="active-link">
        Contacto
      </NavLink>

      <div className={css.socials}>
        <a href="#">
          <i className="fa fa-cubes" />
        </a>

        <a href="#">
          <i className="fa fa-laptop-code" />
        </a>

        <a href="#">
          <i className="fa fa-download" />
        </a>
      </div>
    </nav>
  );
}

export default memo(Navbar);
