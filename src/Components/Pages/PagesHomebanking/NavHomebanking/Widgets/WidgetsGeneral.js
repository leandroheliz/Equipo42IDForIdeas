import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import fotoPerfil from "../../PerfilUsuario/Img/perfil.jpg";

export const Mensajes = () => {
  return (
    <>
      <Dropdown className="d-flex align-items-center justify-content-center">
        <i className="far fa-envelope fa-2x"></i>
        <Dropdown.Toggle variant="ligth" id="dropdown-basic">
          <span className="text-white">Mensajes</span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-center">
          <Dropdown.Item href="#/action-1">
            <span>Mensaje 1</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <span>Mensaje 2</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <span>Mensaje 3</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4">
            <span>Mensaje 4</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-5">
            <span>Mensaje 5</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-6">
            <span>Mensaje 6</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-7">
            <span>Mensaje 6</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-8">
            <span>Mensaje 7</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export const Notificaciones = () => {
  return (
    <div>
      <Dropdown className="d-flex align-items-center justify-content-center">
        <i className="fas fa-bell fa-2x"></i>
        <Dropdown.Toggle variant="ligth" id="dropdown-basic">
          <span className="text-white">Notificaciones</span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-center">
          <Dropdown.Item href="#/action-1">
            <span>Notificación 1</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <span>Notificación 2</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <span>Notificación3</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4">
            <span>Notificación4</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-5">
            <span>Notificación 5</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-6">
            <span>Notificación 6</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-7">
            <span>Notificación 6</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-8">
            <span>Notificación 7</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const Search = () => {
  return <>
      <form className="d-flex">
  <input type='text' name='buscar' placeholder='' class="me-2" aria-label="buscar"/>
  <button type='boton'>Buscar</button>
</form>
  </>;
};

export const PerfilUsuario = () => {
  return (
    <>
      <Dropdown>
        <img
          src={fotoPerfil}
          className="img-fluid rounded-circle avatarPerfil me-2"
          alt=""
        />
        <Dropdown.Toggle variant="ligth" id="dropdown-basic">
          <span className="text-white">Usuario</span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-center">
          <Dropdown.Item href="#/action-1">
            <Link to="" className="text-decoration-none text-black">
              {" "}
              <i className="fas fa-home"></i> Inicio
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <Link to="saldo" className="text-decoration-none text-black">
              <i className="fas fa-user"></i> Saldo
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <Link to="cuentas" className="text-decoration-none text-black">
              <i className="fas fa-file-invoice-dollar"></i> Cuentas
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4">
            <Link to="tarjetas" className="text-decoration-none text-black">
              <i className="far fa-credit-card"></i> Tarjetas
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-5">
            <Link to="movimientos" className="text-decoration-none text-black">
              {" "}
              <i className="fas fa-tachometer-alt"></i> Movimientos
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-6">
            <Link to="profile" className="text-decoration-none text-black">
              {" "}
              <i className="fas fa-user"></i>Mi Perfil
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-7">
            <Link
              to="configuracion"
              className="text-decoration-none text-black"
            >
              <i className="fas fa-cogs"></i> Configuración
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-8">
            <Link to="/" className="text-decoration-none text-black">
              <i class="fas fa-reply-all"></i> Cerrar Sesión
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

