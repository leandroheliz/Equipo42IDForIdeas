import Actividad from "./Actividad/Actividad";
import Saldo from "./Saldo/Saldo";
import Logo from "../../Logo/Logo";
import Chart from "../Chart/Chart";
import fotoPerfil from './PerfilUsuario/Img/perfil.jpg';

const Inicio = () => {
  return (
    <div className="container d-flex ">
      <div className="row">
        <div className="col colHomebanking text-center">
        <Saldo/>
        </div>
        <div className="col">
        <div className="container-saldo">
      <div className="saldo-col1">
        <div className="d-flex">
      <img src={fotoPerfil} alt="" className="rounded-circle" style={{height:"110px", width:"110px"}}/>
        </div>
      cuentas del usuario + datos
       
      </div>
    </div>

        </div>
        <div className="col">
         <Chart/>
        </div>
        <div className="row d-flex justify-content-center text-center">
          <div className="col-4">
        <Logo/>
          </div>
          <div className="col-6">
          <Actividad />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio;