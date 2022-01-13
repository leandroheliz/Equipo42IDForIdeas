import BotonContacto from "../Botones/BotonContacto";

const Contacto = () => {
  return (
    <div className="container text-center">
      <br/>
          <h3>Contactanos</h3>
      <div className="row">
        <div className="col colFooter">
          <span><i className="fas fa-phone-volume mb-2"></i> XXXXXXXXXXXXXXXXX</span>
          <span><i className="fas fa-envelope mb-2"></i> XXXXXXXXXXXXXXXXX</span>
          <span><i className="fas fa-map-marker-alt mb-2"></i> XXXXXXXXXXXXXXXXX</span>
        </div>
        <div className="col colFooter">
          <form className="col">
            <input type="text" placeholder=" Nombre y apellido" className="form-control mb-2"/>
            <input type="text" placeholder="Teléfono" className="form-control mb-2"/>
            <input type="email" placeholder=" Email" className="form-control mb-2"/>
          </form>
        <BotonContacto/>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default Contacto;