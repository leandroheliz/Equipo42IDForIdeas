import Actividad from "./Actividad/Actividad";
import Saldo from "./Saldo/Saldo";
import Logo from "../../Logo/Logo";
import Chart from "../Chart/Chart";

const Inicio = () => {
  return (
    <div className="container d-flex ">
      <div className="row">
        <div className="col colHomebanking text-center">
        <Saldo/>
        <br/>
        </div>
        <div className="col mt-4">
         <Chart/>
        </div>
        <div className="row d-flex justify-content-center">
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