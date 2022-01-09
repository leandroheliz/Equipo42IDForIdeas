import React from "react";

const Saldo = () => {
  return (
    <div className="container-saldo">
      <div className="saldo">
        <h1>Dinero disponible:</h1>
        <p>$######</p>
      </div>
      <div className="btns">
        <button>Ingresar Dinero</button>
        <button>Transferir Dinero</button>
      </div>
    </div>
  );
};

export default Saldo;
