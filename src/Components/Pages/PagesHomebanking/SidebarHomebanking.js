import { NavLink } from "react-router-dom";

const SidebarHomebanking = () => {
  return (
      <div className="sidebar">
        <div className="logo text-center">
          <p>Bienvenido @usuario</p>
        </div>
        <div className="menu p-1">
        <NavLink to="" className="text-decoration-none text-white">
           <i className="fas fa-home"></i> Inicio
          </NavLink>
          <NavLink to="profile" className="text-decoration-none text-white">
            <i className="fas fa-user"></i> Mi Perfil
          </NavLink>
          <NavLink to="saldo" className="text-decoration-none text-white">
            <i className="fas fa-wallet"></i> Saldo
          </NavLink>
          <NavLink to="cuentas" className="text-decoration-none text-white">
            <i className="fas fa-file-invoice-dollar"></i> Cuentas
          </NavLink>
          <NavLink to="enviar_dinero" className="text-decoration-none text-white">
          <i className="far fa-share-square"></i> Enviar Dinero
          </NavLink>
          <NavLink to="tarjetas" className="text-decoration-none text-white">
            <i className="far fa-credit-card"></i> Tarjetas
          </NavLink>
          <NavLink to="movimientos" className="text-decoration-none text-white">
            <i className="fas fa-tachometer-alt"></i> Movimientos
          </NavLink>
          <NavLink to="configuracion" className="text-decoration-none text-white">
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
