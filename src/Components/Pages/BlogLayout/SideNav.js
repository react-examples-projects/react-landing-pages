import React from "react";

export default function SideNav() {
  return (
    <nav className="menu" role="navigation">
      <div className="search">
        <input type="search" name="q" id="q" placeholder="Buscar..." />
      </div>

      <section className="documents">
        <h4 className="section-title">Documentos</h4>
        <ul>
          <li>Archivos</li>
          <li>Juegos</li>
          <li>Documentacion</li>
          <li>Programas</li>
          <li>Historia</li>
          <li>Programacion</li>
          <li>Informatica</li>
          <li>Redes</li>
          <li>Sistemas</li>
          <li>Electronica</li>
        </ul>
      </section>

      <section className="examples">
        <h4 className="section-title">Ejemplos</h4>

        <div className="example">
          <figure>
            <img src="img/pic03.jpg" alt="" />
            <figcaption>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, pariatur.
            </figcaption>
          </figure>
        </div>
        <div className="example">
          <figure>
            <img src="img/pic03.jpg" alt="" />
            <figcaption>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, pariatur.
            </figcaption>
          </figure>
        </div>
        <div className="example">
          <figure>
            <img src="img/pic03.jpg" alt="" />
            <figcaption>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, pariatur.
            </figcaption>
          </figure>
        </div>
      </section>
    </nav>
  );
}
