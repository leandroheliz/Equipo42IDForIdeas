import mapa from '../../Assets/Image/mapaGif.gif';
import telefono from '../../Assets/Image/telefonoGif.gif';
import ask from '../../Assets/Image/askGif.gif';


const BannerFooter = () => {
  return (
    <div className="container text-center">
          <div className="row">
        <div className="col">
          <img src={mapa} alt="mapa" style={{height:"150px"}}/>
          <br />
          <h5>Encontranos</h5>
        </div>
        <div className="col">
        <img src={ask} alt="mapa" style={{height:"150px"}}/>
        <br/>
        <h5>Contactanos</h5>
        </div>
        <div className="col">
        <img src={telefono} alt="mapa" style={{height:"150px"}}/>
        <br/>
        <h5>Te ayudamos</h5>
        </div>
      </div>
    </div>
  )
}

export default BannerFooter;