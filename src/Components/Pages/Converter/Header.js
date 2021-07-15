export default function Header() {
  return (
    <header class="cabecera">
      <div class="gestion-cuentas">
        <button class="btn">Login</button>
        <button class="btn">Create an account</button>
      </div>

      <div class="logo">
        <div class="logo-container">
          <div class="logo-part-1">
            <h2>Libardo</h2>
          </div>
          <div class="logo-part-2">
            <h2>Rengifo</h2>
          </div>
        </div>

        <div class="descripcion-logo">
          <h2>
            Select and upload your le containing markdown markup and we'll
            convert it to a PDF for you in an instant.
          </h2>
          <button class="btn">Convert your file</button>
        </div>

        <div class="lista">
          <ul>
            <li>
              <a href="/?index=1">1</a>
            </li>
            <li>
              <a href="?index=2">2</a>
            </li>
            <li>
              <a href="?index=3">3</a>
            </li>
            <li>
              <a href="?index=4">4</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
