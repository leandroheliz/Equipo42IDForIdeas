import React,{useState} from "react";
import { Link } from "react-router-dom";

const Cuenta = () =>{   
    const [ estaCreandoCuenta ] = useState(false);
        return(
            <div className='container justify-content-center d-flex text-center'>
                <div className='row'>
                    <br/>
                        <h2>{ estaCreandoCuenta? "Registrate" : "Crear Cuenta"}</h2>
                    <br/>
                      <form className="form-group">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="mb-3 input-group">
                                        <button type="button" className="btn btn-outline-blue"><i className='fas fa-user'></i></button>
                                        <input type="text" placeholder="Nombre" className="form-control"/>
                                    </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="mb-3 input-group">
                                        <button type="button" className="btn btn-outline-blue"><i className='fas fa-user'></i></button>
                                        <input type="text" placeholder="Apellidos" className="form-control" />
                                    </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="mb-3 input-group">
                                        <button type="button" className="btn btn-outline-blue"><i class='far fa-envelope'></i></button>
                                        <input type="text" placeholder="Correo electrónico" className="form-control"/>
                                    </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="mb-3 input-group">
                                        <button type="button" className="btn btn-outline-blue"><i className='fas fa-key'></i></button>
                                        <input type="text" placeholder="Contraseña" className="form-control" />
                                    </div>
                              </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="mb-3 input-group">
                                        <button type="button" className="btn btn-outline-blue"><i className='fas fa-key'></i></button>
                                        <input type="text" placeholder="Confirma tu contraseña" className="form-control"/>
                                    </div>
                                </div>
                                    <div className="mb-3 input-group">
                                        <input type="checkbox" class="form-check-input m-2" id="exampleCheck1"></input>
                                        <label className="form-check-label mt-1" for="exampleCheck1">Acepto terminos y condiciones</label>
                                    </div>
                                <Link to='/homebanking' type='submit' className='btn btn-success'>
                                    { estaCreandoCuenta ? "Iniciar" : "Iniciar Sesión"}
                                </Link>
                        </form>
                    <br></br>
                </div>
           </div>
        )
    }

export default Cuenta

