import googleplay from '../../Assets/Image/googleplay.png';
import appstore from '../../Assets/Image/appstore.png';
import mobile from '../../Assets/Image/mobile.gif';

const BannerHome2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col colFooter text-center">
          <span>Cuenta DNI</span>
          <span>Una solución digital, que incluye y conviene a todos.

Abrí­ tu cuenta en Banco Provincia, en simples pasos solo con tu DNI, es gratis y 100 % digital.

Si ya tenés una cuenta, simplemente asociala a Cuenta DNI y usá tu dinero desde tu celular de manera rápida, simple y segura.

Descargá la aplicación en:</span>
<br/>
<div className="d-flex">
  <button className="btn"><img src={appstore} alt="" style={{width:"200px", height:"50px"}}/></button>
  <button className="btn"><img src={googleplay} alt="" style={{width:"200px", height:"50px"}}/></button>
</div>
<br/>
<div className="text-center">
<button className="btn-home">Conocé más</button>
</div>
        </div>
        <div className="col">
       <img src={mobile} alt="" style={{width:"600px", height:"600px"}}/>
        </div>
      </div>
    </div>
  )
}

export default BannerHome2;