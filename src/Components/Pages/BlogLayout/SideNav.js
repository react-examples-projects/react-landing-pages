import React from "react";

export default function SideNav() {
  return (
    <nav class="menu" role="navigation">
      <div class="search">
        <input type="search" name="q" id="q" placeholder="Buscar..." />
      </div>

      <section class="documents">
        <h4 class="section-title">Documentos</h4>
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

      <section class="examples">
        <h4 class="section-title">Ejemplos</h4>

        <div class="example">
          <figure>
            <img src="img/pic03.jpg" alt="" />
            <figcaption>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, pariatur.
            </figcaption>
          </figure>
        </div>
        <div class="example">
          <figure>
            <img src="img/pic03.jpg" alt="" />
            <figcaption>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, pariatur.
            </figcaption>
          </figure>
        </div>
        <div class="example">
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
