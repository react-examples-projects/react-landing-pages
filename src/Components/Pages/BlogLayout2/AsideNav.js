import { useEffect } from "react";

export default function AsideNav() {
  useEffect(() => {
    const btnMenu = document.querySelector(".principal .secundario h2 label i");
    const statusBtn = {
      BARRAS: "fa-bars",
      CERRAR: "fa-window-close",
    };
    let closed = false; // el menu esta cerrado por default

    btnMenu.addEventListener(
      "click",
      function (e) {
        if (!closed) {
          // si NO esta cerrado (abierto), entonces añadimos la opcion de cerrar
          // comprobamos si las barras del menu estan en el boton
          if (this.classList.contains(statusBtn.BARRAS)) {
            this.classList.remove(statusBtn.BARRAS);
          }
          this.classList.add(statusBtn.CERRAR);
          closed = true;
        } else {
          if (this.classList.contains(statusBtn.CERRAR)) {
            this.classList.remove(statusBtn.CERRAR);
          }
          this.classList.add(statusBtn.BARRAS);
          closed = false;
        }
      },
      false
    );
  }, []);
  
  return (
    <aside className="secundario">
      <div className="titulo-aside">
        <h2>
          Internet Information Services
          <label htmlFor="toggle-menu" className="label-toggle">
            <i className="fa fa-bars"></i>
          </label>
        </h2>
        <p className="subtitulo">Otro sitio más de Geeks.ms</p>

        <input type="checkbox" id="toggle-menu" />

        <div className="busqueda-aside">
          <input type="search" id="q" placeholder="Buscar..." maxLength="100" />
        </div>

        <div className="publicaciones">
          <ul className="entradas-recientes">
            <caption>
              <h3>Entradas Recientes:</h3>
            </caption>
            <li className="post">
              Introducción a Internet Information Server 7
            </li>
            <li className="post">Llegó el día. Hoy Webcast de IIS 7</li>
            <li className="post">Comming Soon… www.IIS.net!!!</li>
            <li className="post">Microsoft.Web.Administration en IIS 7</li>
          </ul>

          <ul className="comentarios-recientes">
            <caption>
              <h3>Comentarios Recientes:</h3>
            </caption>
            <li className="post">
              <p className="contenido-post">
                <span className="autor">anonymous</span>
                en ¿Qué es FDDI?
              </p>
            </li>
            <li className="post">
              <p className="contenido-post">
                <span className="autor">Libardo J</span>
                ¿Qué es FDDI?
              </p>
            </li>
            <li className="post">
              <p className="contenido-post">
                <span className="autor">anonymous</span>
                ¿Qué es FDDI?
              </p>
            </li>
            <li className="post">
              <p className="contenido-post">
                <span className="autor">Santiago</span>
                10 Preguntas frecuentes de IIS
              </p>
            </li>
          </ul>

          <ul className="archivos">
            <caption>
              <h3>Archivos:</h3>
            </caption>
            <li className="post">diciembre 2006</li>
            <li className="post">mayo 2006</li>
            <li className="post">octubre 2005</li>
            <li className="post">julio 2005</li>
          </ul>

          <ul className="categorias">
            <caption>
              <h3>Categorias:</h3>
            </caption>
            <li className="post-nothing">No hay categorías</li>
          </ul>

          <ul className="meta">
            <caption>
              <h3>Meta:</h3>
            </caption>
            <li className="post">RSS de las entradas</li>
            <li className="post">RSS de los comentarios</li>
            <li className="post">Acceder</li>
            <li className="post">WordPress.org</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
