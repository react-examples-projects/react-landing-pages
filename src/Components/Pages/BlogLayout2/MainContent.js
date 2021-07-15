export default function MainContent() {
  return (
    <main className="contenido-principal" role="main">
      <p>
        Siguiendo el hilo a alguna de las preguntas de los Webcasts de la semana
        pasada.
      </p>

      <p>
        FDDI (Fiber Distributed Data Interface) es un conjunto de estándares
        ANSI e ISO para la transmisión de datos en lineas de fibra óptica en
        redes de área local (LAN) que se pueden extender hasta un radio de unos
        200km. El protocolo FDDI está basado en el protocolo Token Ring. A
        mayores de cubrir una mayor distancia geográfica, las redes de área
        local FDDI pueden soportan miles de usuarios. FDDI se usa con frecuencia
        para el Backbone para redes de área extensa (WAN).
      </p>
      <p>
        Una red FDDI contiene dos token rings, una como posible backup en el
        caso de un fallo en el anillo primario. El anillo primario ofrece una
        capacidad de hasta 100 Mbps. Si no se necesita el anillo secundario como
        backup, también puede ser usado para el envío de datos, extendiendo la
        capacidad de FDDI hasta los 200 Mbps. Un anillo simple se puede extender
        hasta la máxima distancia; un anillo dual hasta unos 100km.
      </p>
      <p>
        Información mucho, mucho más detallada de FDDI en:
        http://www.cisco.com/univercd/cc/td/doc/cisintwk/ito_doc/fddi.htm
      </p>
      <p>-Libardo</p>
    </main>
  );
}
