import Cards from "../Tarjetas/Cards";

const Saldo = () => {
  return (
    <div className="container-saldo">
      <div className="saldo-col1">
        <Cards />
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col">
              <div className="btns">
                <button>Transferir Dinero</button>
              </div>
            </div>
            <div className="col mt-4">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <span>Desactivar</span>
              </div>
            </div>
          </div>
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
