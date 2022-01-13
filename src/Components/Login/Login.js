import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Login = () => {

  const [ estado, setEstado ] = useState(false);

    return(
      <div className="container d-flex justify-content-center">
      <form className="text-center">
        <h4>{!estado ? "Iniciar Sesión" : "Registrate" }</h4>

         <input type="email" className="form-control mb-3" id="formContactoNombre" aria-describedby="emailHelp" style={{width:"500px", fontSize:"25px"}}
      placeholder=" Ingrese su email"/>
        
      <input type="password" className="form-control mb-3" id="formContactoEmail" style={{width:"500px", fontSize:"25px"}} placeholder=" Ingrese su contraseña"/>
        
    <Link to="/perfil" className="text-decoration-none">
      <button class="cssbuttons-io-button" onClick={() => setEstado(!estado)}>{!estado ? "Iniciar Sesión" : "Registrate" }
        <div className="icon">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
         </div>
        </button>
          </Link>
    <span class="btn d-flex justify-content-end mt-5" onClick={() => setEstado(!estado)}>{!estado ? "¿No tenes cuenta? Registrate" : "¿Tenes cuenta? Iniciar Sesión" }</span>
  </form>
      </div>
    )
}

export default Login;