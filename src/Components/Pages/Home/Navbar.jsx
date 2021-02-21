import { memo } from "react";
import { NavLink } from "react-router-dom";
import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";

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
          <FiGithub />
        </a>

        <a href="#">
          <FiFacebook />
        </a>

        <a href="#">
          <FiLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default memo(Navbar);
