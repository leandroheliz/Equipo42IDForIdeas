import Logo from "../Logo/Logo";
import Actividad from "../Actividad/Actividad";
import Saldo from "../Saldo/Saldo";

const InicioHomebanking = () => {
  return (
      <div className="col container d-flex text-center">
            <div className="col colHomebanking">
               <Saldo />
                <br/>
                <Logo />
            </div>
            <div className="col">
              <br/>
            <Actividad />
            </div>
      </div>
  )
}

export default InicioHomebanking;
