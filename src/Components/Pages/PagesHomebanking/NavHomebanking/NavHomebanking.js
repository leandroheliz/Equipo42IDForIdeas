import { Mensajes, Notificaciones, Search, PerfilUsuario } from "./Widgets/WidgetsGeneral";

const NavHomebanking = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navBarHomebanking">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-user-cog"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span style={{ fontSize: "25px", color: "white" }}>Plus+</span>
              <span style={{ fontSize: "25px" }}>Bank</span>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Search />
            </li>
          </ul>
          <Mensajes />
          <Notificaciones />
          <PerfilUsuario />
        </div>
      </div>
    </nav>
  );
};

export default NavHomebanking;
