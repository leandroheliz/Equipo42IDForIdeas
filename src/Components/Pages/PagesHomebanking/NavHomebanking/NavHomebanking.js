import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fotoPerfil from '../../PagesHomebanking/PerfilUsuario/Img/perfil.jpg';

const NavHomebanking = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light navBarHomebanking">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-user-cog"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="" className="text-decoration-none text-black">
         <span style={{fontSize: "25px", color: "white"}}>Plus+</span><span style={{fontSize: "25px"}}>Bank</span>
          </Link>
        </li>
      </ul>
<Dropdown>
    <img src={fotoPerfil} className="img-fluid rounded-circle avatarPerfil me-2" alt="" />
  <Dropdown.Toggle variant="ligth" id="dropdown-basic">
  <span className="text-white">Usuario</span>
  </Dropdown.Toggle>
  <Dropdown.Menu className="text-center">
    <Dropdown.Item href="#/action-1">
      <Link to="" className="text-decoration-none text-black"> <i className="fas fa-home"></i> Inicio</Link>
      </Dropdown.Item>
    <Dropdown.Item href="#/action-2">
    <Link to="saldo" className="text-decoration-none text-black"><i className="fas fa-user"></i> Saldo</Link>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-3">
    <Link to="cuentas" className="text-decoration-none text-black"><i className="fas fa-file-invoice-dollar"></i>  Cuentas</Link>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-4">
    <Link to="tarjetas" className="text-decoration-none text-black"><i className="far fa-credit-card"></i> Tarjetas</Link>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-5">
    <Link to="movimientos" className="text-decoration-none text-black"> <i className="fas fa-tachometer-alt"></i> Movimientos</Link>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-6">
    <Link to="profile" className="text-decoration-none text-black"> <i className="fas fa-user"></i>Mi Perfil</Link>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-7">
    <Link to="configuracion" className="text-decoration-none text-black"><i className="fas fa-cogs"></i> Configuración</Link>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-8"><Link to="/" className="text-decoration-none text-black"><i class="fas fa-reply-all"></i> Cerrar Sesión</Link>
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </div>
  </div>
</nav>
  )
}

export default NavHomebanking;