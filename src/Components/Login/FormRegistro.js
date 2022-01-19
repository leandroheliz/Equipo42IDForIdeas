import { Link } from 'react-router-dom';

const FormRegistro = () => {
  return (
    <div className="container2">
      <form className="form-registro">
        <h4>Registrate</h4>
        
      <div className='registro-grid' >
      <input
          type="text"
          id="formContactoEmail"
          placeholder=" Ingrese su nombre"
        />

        <input
          type="text"
          id="formContactoApellido"
          placeholder=" Ingrese su apellido"
        />

        <input
          type="email"
          id="formContactoEmail"
          placeholder=" Ingrese su email"
        />

        <input
          type="password"
          id="formContactoPass"
          placeholder="Password"
        />

        <input
          type="password"
          id="formContactoPass2"
          placeholder="Confirme su password"
        />


        <input
          type="tel"
          id="formContactoTel"
          placeholder="Telefono"
        />

        <input
          type="text"
          id="formContactoPais"
          placeholder="Pais"
        />

        <input
          type="text"
          id="formContactoDni"
          placeholder="DNI"
        />
      </div>

   
        <Link to="/AppHomebanking" className="text-decoration-none">
          <button className="cssbuttons-io-button">
            Crear cuenta
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </Link>
        <Link to="/login" className="text-decoration-none mt-4">
          <span className="text-decoration-none">
            Ya tienes cuenta? Inicia sesion
          </span>
        </Link>
      </form>
    </div>
  );
};


export default FormRegistro;