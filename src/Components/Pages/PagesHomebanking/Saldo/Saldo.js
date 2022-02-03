import Cards from "../Tarjetas/Cards";

const Saldo = () => {
  return (
    <div className="container-saldo">
      <div className="saldo-col1">
        <Cards />
        <div className="btns">
          <button>Transferir Dinero</button>
        </div>
      </div>

      <div className="saldo-col2">
        <div className="saldo-actual">
          <h1>$2800</h1>
          <small>Saldo actual</small>
        </div>
        <div className="ingresos">
          <h1>$3000</h1>
          <small>Ingresos</small>
        </div>
        <div className="egresos">
          <h1>$200</h1>
          <small>Egresos</small>
        </div>
      </div>
    </div>
  );
};

export default Saldo;
