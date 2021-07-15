import pic01 from "../../img/pic01.jpg";

export default function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation-text">
        <h1>Hola!, Me llamo libardo y realice esta genial plantilla</h1>
        <h4>Una sencilla plantilla, copiada desde fuentes sin copyright</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nam
          in fuga magnam iusto. Perspiciatis illum aliquid neque impedit,
          pariatur blanditiis est at, deleniti amet eius saepe deserunt suscipit
          numquam!
        </p>
        <button className="button">Leer más</button>
      </div>

      <img
        src={pic01}
        title="Imagen 1"
        alt="Presentation placeholder"
        className="img-fluid h-100 d-block"
      />
    </section>
  );
}
