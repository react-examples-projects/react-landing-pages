export default function Footer() {
  return (
    <footer
      className="
      container-fluid
      footer
      text-white
      d-flex
      justify-content-center
      align-items-center
      "
      style={{ marginTop: "10rem" }}
    >
      <div
        className="row w-75 pt-4 pt-sm-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-12 col-sm-6 col-lg-6 col-md-6">
          <form className="w-75 m-0 mx-sm-auto">
            <h6 className="mb-3 fw-bold">Contact us</h6>
            <input
              type="text"
              className="form-control border-0 shadow mb-1 mb-lg-4 py-1"
              placeholder="Name"
            />

            <input
              type="email"
              className="form-control border-0 shadow mb-1 mb-lg-4 py-1"
              placeholder="E-mail"
            />

            <textarea
              className="form-control border-0 shadow mb-3"
              placeholder="Message"
              cols="30"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="btn btn-success w-100 rounded-0 px-5 py-1"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="col-12 col-sm-6 col-lg-6 col-md-6 mt-4 mt-sm-0">
          <div className="row">
            <div className="col-5 col-lg-4 col-md-6">
              <h6 className="mb-3 fw-bold">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-1">About us</li>
                <li className="mb-1">Service</li>
                <li className="mb-1">Contact</li>
                <li className="mb-1">Popular</li>
              </ul>
            </div>

            <div className="col-7 col-lg-3 col-md-6">
              <h6 className="mb-3 fw-bold">Explore</h6>
              <ul className="list-unstyled">
                <li className="mb-1">Privacy</li>
                <li className="mb-1">Policy</li>
                <li className="mb-1">Faq</li>
                <li className="mb-1">Termns</li>
              </ul>
            </div>

            <div className="col-12 col-md-12 mt-2 mt-lg-5">
              <h6 className="mb-3 fw-bold">Síguemos</h6>
              <i className="fa fa-facebook-f me-3"></i>
              <i className="fa fa-instagram me-3"></i>
              <i className="fa fa-twitter me-3"></i>
              <i className="fa fa-google me-3"></i>
              <i className="fa fa-pinterest-p me-3"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
