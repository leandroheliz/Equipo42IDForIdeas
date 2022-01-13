import { Link } from 'react-router-dom';
import BotonLogin from '../Botones/BotonLogin';

const Registro = () => {
  return (
    <div className="container d-flex justify-content-center">
    <form className="text-center">
      <br/>
  <div className="mb-3">
    <input type="email" className="form-control" id="formContactoNombre" aria-describedby="emailHelp" style={{width:"500px", fontSize:"25px"}}
    placeholder=" Ingrese su email"/>
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" id="formContactoEmail" style={{width:"500px", fontSize:"25px"}} placeholder=" Ingrese su contraseña"/>
  </div>
  <BotonLogin/>
  <br/>
  <br/>
  <Link to="/login">
  <span style={{fontSize: "25px", fontWeight: "bold"}}>Tenes Cuenta? Inicia Sesión</span>
  </Link>
</form>
    </div>
  )
}

export default Registro;