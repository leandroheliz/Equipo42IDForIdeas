import React, { useState }from "react";
import { Link } from 'react-router-dom';

const Login = () => {

  const [ estaRegistrandose, setEstaRegistrandose ] = useState(false);

    return(
        <div className='container justify-content-center d-flex text-center'>
            <div className='row'>
                <div className='' >
                <br/><br/>
                    <h2>{ estaRegistrandose? "Registrate" : "Inicia Sesión"}</h2>
                    <form className='form-group'> 
                        <input type='text' placeholder='Usuario' className='form-control' style={{ width: '30rem' }} />
                        <input type='password' placeholder='Contraseña' className='form-control mt-3' style={{ width: '30rem' }} />
                        <br/>
                       <Link to='/homebanking' type='submit' className='btn btn-success'>
                         { estaRegistrandose ? "Registrate" : "Iniciar Sesión"}
                       </Link>
                       <br/><br/>
                       <button type="submit" className='btn btn-success' 
                          onClick={() => setEstaRegistrandose(!estaRegistrandose)}>
                         { estaRegistrandose ? "¿ Ya tienes cuenta? Inicia Sesión" : "¿No tienes cuenta? Registrate"}
                       </button> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;