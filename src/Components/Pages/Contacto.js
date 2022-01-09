
const Contacto = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col colFooter">
          <span><i className="fas fa-phone-volume mb-2"></i></span>
          <span><i className="fas fa-map-marker-alt mb-2"></i></span>
          <span><i className="fas fa-envelope mb-2"></i></span>
        </div>
        <div className="col colFooter">
          <h3>Contactanos</h3>
    <input type="text" class="inputContacto mb-3" placeholder="Nombre y Apellido"/>
        <button type="submit">Enviar</button>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default Contacto;