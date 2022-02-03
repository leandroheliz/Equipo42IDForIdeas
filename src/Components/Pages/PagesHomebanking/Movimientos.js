import Actividad from "./Actividad/Actividad"
import LineChart from '../Chart/LineChart'

const Movimientos = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
     <Actividad/>
        </div>
        <div className="col">
          <LineChart/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Movimientos
