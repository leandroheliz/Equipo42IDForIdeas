import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fotoPerfil from '../../PerfilUsuario/Img/perfil.jpg';

const NavHomebanking = () => {
  return (
    <div className="container-fluid"> 
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light navBarHomebanking">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <span style={{fontSize: "25px", color: "white"}}>Plus+</span><span style={{fontSize: "25px"}}>Bank</span>
        </li>
      </ul>
<Dropdown>
    <img src={fotoPerfil} className="img-fluid rounded-circle avatarPerfil me-2" alt="" />
  <Dropdown.Toggle variant="ligth" id="dropdown-basic">
  <span className="text-white">Usuario</span>
  </Dropdown.Toggle>
  <Dropdown.Menu className="text-center">
    <Dropdown.Item href="#/action-1">
      <Link to="/perfilusuario" className="text-decoration-none text-black"><i className="fas fa-user"></i> Mi Perfil</Link>
      </Dropdown.Item>
    <Dropdown.Item href="#/action-2">
    <Link to="/" className="text-decoration-none text-black"><i className="fas fa-cogs"></i> Configuración</Link>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-3"><Link to="/" className="text-decoration-none text-black"><i class="fas fa-reply-all"></i> Cerrar Sesión</Link>
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </div>
  </div>
</nav>

      <div className="col">
      <div className="sidebar">
        <div className="logo text-center">
          <p>Bienvenido @usuario</p>
        </div>
        <div className="menu p-1">
          <Link to="/mi_perfil" className="text-decoration-none text-white">
            <i className="fas fa-user"></i> Mi Perfl
          </Link>
          <Link to="/saldo" className="text-decoration-none text-white">
            <i className="fas fa-wallet"></i> Saldo
          </Link>
          <Link to="/cuentas" className="text-decoration-none text-white">
            <i className="fas fa-file-invoice-dollar"></i> Cuentas
          </Link>
          <Link to="/" className="text-decoration-none text-white">
            <i className="far fa-credit-card"></i> Tarjetas
          </Link>
          <Link to="/" className="text-decoration-none text-white">
            <i className="fas fa-tachometer-alt"></i> Movimientos
          </Link>
          <Link to="/configuracion" className="text-decoration-none text-white">
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
    </div>
    </div>
  )
}

export default NavHomebanking;