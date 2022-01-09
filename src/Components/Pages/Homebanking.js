import React from 'react';
import { Link } from 'react-router-dom';
import NavHomebanking from './NavHomebanking/NavHomebanking';

const Homebanking = () => {
  return (
    <div className="">
      <div className="row justify-content-start">
        <div className="col-4 sidebar justify-content-start bg-dark">
          <div className="logo">
            <p>Bienvenido @usuario</p>
          </div>
          <div className="menu p-3">
          <Link to="/" className="text-decoration-none text-white mb-2"><i className="fas fa-cogs"></i> Perfil</Link>
          <Link to="/" className="text-decoration-none text-white mb-2"><i className="fas fa-wallet"></i> Saldo</Link>
          <Link to="/" className="text-decoration-none text-white mb-2"><i className="fas fa-file-invoice-dollar"></i> Cuentas</Link>
            <Link to="/" className="text-decoration-none text-white mb-2"><i className="far fa-credit-card"></i> Tarjetas</Link>
            <Link to="/" className="text-decoration-none text-white mb-2"><i className="fas fa-tachometer-alt"></i> Movimientos</Link>
            <Link to="/" className="text-decoration-none text-white mb-2"><i className="fas fa-cogs"></i> Configuración</Link>
            <Link to="/" className="text-decoration-none text-white mb-2"><i class="fas fa-reply-all"></i> Salir</Link>
          </div>
          </div>
          
        <div className="col">
          <br/>
          <NavHomebanking/>
        <div className="text-center"></div>
        <hr/>
              col contenido</div>
        </div>
    </div>
  )
}

export default Homebanking;