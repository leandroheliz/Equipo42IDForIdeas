import { Link, NavLink } from 'react-router-dom';

 const Navbar = () => {
    return (

<nav className="navbar navbar-expand-lg navbar-light navBar">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/"><i className="fas fa-university"></i> Plus Bank</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink activeClassName="active" className="nav-item nav-link" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeClassName="active" className="nav-item nav-link" to="/about">Sobre Plus Bank</NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeClassName="active" className="nav-item nav-link" to="/preguntas_frecuentes">Preguntas Frecuentes</NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeClassName="active" className="nav-item nav-link" to="/contacto">Contacto</NavLink>
        </li>
      </ul>
         <ul className="navbar-nav ms-auto">
           <NavLink activeClassName="active" className="nav-item nav-link" to="/login"><i className="fas fa-sign-in-alt"></i> Login</NavLink>
           </ul>
    </div>
  </div>
</nav>           
    )
}

export default Navbar;