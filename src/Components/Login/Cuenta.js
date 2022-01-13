import React,{useState} from "react";
import { Link } from "react-router-dom";

const Cuenta = () =>{
    
    const [ estaCreandoCuenta ] = useState(false);

        return(
            <div className='container justify-content-center d-flex text-center'>
            <div className='row'>
                <div className='' >
                <br/>
                    <h2>{ estaCreandoCuenta? "Registrate" : "Crear Cuenta"}</h2>
                    <br/>
                    <form className='form-group'> 
                        <input type= 'text' placeholder="Nombre" className="form-control mt3" style={{width:"30rem"}}/>
                        <input type= 'text' placeholder="Apellido" className="form-control mt-3" style={{width:"30rem"}}/>
                        <input type='email' placeholder='Correo electrónico' required className='form-control mt-3' style={{ width: '30rem' }} />
                        <input type='password' placeholder='Contraseña' className='form-control mt-3' style={{ width: '30rem' }} />
                        <br></br>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Acepto terminos y condiciones</label>
                        <br/>
                       <Link to='/homebanking' type='submit' className='btn btn-success'>
                         { estaCreandoCuenta ? "Iniciar" : "Iniciar Sesión"}
                       </Link>                
                       <br></br>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cuenta

