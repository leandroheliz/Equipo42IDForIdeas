import React from "react";
import { Link } from "react-router-dom";

const SidebarHomebanking = () => {
  return (
    <div className="row">
      <div className="col-4 sidebar bg-dark h-100">
        <div className="logo text-center">
          <p>Bienvenido @usuario</p>
        </div>
        <div className="menu p-1">
          <Link to=":perfilusuario" className="text-decoration-none text-white">
            <i className="fas fa-user"></i> Mi Perfl
          </Link>
          <Link to="/" className="text-decoration-none text-white">
            <i className="fas fa-wallet"></i> Saldo
          </Link>
          <Link to="/" className="text-decoration-none text-white">
            <i className="fas fa-file-invoice-dollar"></i> Cuentas
          </Link>
          <Link to="/" className="text-decoration-none text-white">
            <i className="far fa-credit-card"></i> Tarjetas
          </Link>
          <Link to="/" className="text-decoration-none text-white">
            <i className="fas fa-tachometer-alt"></i> Movimientos
          </Link>
          <Link to="/" className="text-decoration-none text-white">
            <i className="fas fa-cogs"></i> Configuración
          </Link>
          <div className="salir p-4">
            <Link to="/" className="text-decoration-none text-white">
              <i class="fas fa-reply-all"></i> Salir
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarHomebanking;
