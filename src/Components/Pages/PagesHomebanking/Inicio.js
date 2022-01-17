import Actividad from "./Actividad/Actividad";
import Saldo from "./Saldo/Saldo";
import Logo from "../../Logo/Logo";
// import Tarjeta from "./Tarjetas/Tarjeta";

const Inicio = () => {
  return (
    <div className="container d-flex text-center">
      <div className="row">
        <div className="col colHomebanking">
        <Saldo/>
        <br/>
        {/* <Tarjeta/>
        <br/> */}
        <Logo/>
        </div>
        <div className="col">
          <Actividad />
        </div>
      </div>
    </div>
  )
}

export default Inicio;