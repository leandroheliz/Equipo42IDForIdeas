import { NavLink } from "react-router-dom";

const SidebarHomebanking = () => {
  return (
      <div className="sidebar">
        <div className="logo text-center">
          <p>Bienvenido @usuario</p>
        </div>
        <div className="menu p-1">
          <NavLink to="/perfil_usuario" className="text-decoration-none text-white">
            <i className="fas fa-user"></i> Mi Perfl
          </NavLink>
          <NavLink to="/actividad" className="text-decoration-none text-white">
            <i className="fas fa-wallet"></i> Saldo
          </NavLink>
          <NavLink to="/cuentas" className="text-decoration-none text-white">
            <i className="fas fa-file-invoice-dollar"></i> Cuentas
          </NavLink>
          <NavLink to="/" className="text-decoration-none text-white">
            <i className="far fa-credit-card"></i> Tarjetas
          </NavLink>
          <NavLink to="/" className="text-decoration-none text-white">
            <i className="fas fa-tachometer-alt"></i> Movimientos
          </NavLink>
          <NavLink to="/" className="text-decoration-none text-white">
            <i className="fas fa-cogs"></i> Configuración
          </NavLink>
          <div className="salir p-4">
            <NavLink to="/" className="text-decoration-none text-white">
              <i class="fas fa-reply-all"></i> Salir
            </NavLink>
          </div>
        </div>
 </div>
  );
};

export default SidebarHomebanking;
