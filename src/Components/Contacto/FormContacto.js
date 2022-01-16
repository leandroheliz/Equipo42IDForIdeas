import BotonContacto from "../Botones/BotonContacto";

const FormContacto = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
      <h3>Contactanos</h3>
        <div className="contact-body">
          <div className="contact-links">
            <span>
              <i className="fas fa-phone-volume mb-2"></i> +5942741522
            </span>
            <span>
              <i className="fas fa-envelope mb-2"></i> hola@plusbank.com
            </span>
            <span>
              <i className="fas fa-map-marker-alt mb-2"></i> Evergreen Terrace 742
            </span>
          </div>
          <div className="contact-form">
            <form className="col">
              <input
                type="text"
                placeholder=" Nombre y apellido"
                className="form-control mb-2"
              />
                <input
                  type="email"
                  placeholder=" Email"
                  className="form-control mb-2"
                />
                <div className='textarea' >
                  <label for='textarea' > Dejanos un mansaje(opcional) </label>
              <textarea id='textarea'  className='m-2 ' cols='55' rows='5' ></textarea>
                </div>
              <BotonContacto />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContacto;
