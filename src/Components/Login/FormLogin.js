import React from "react";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <div className="container">
      <form className="form-login">
        <h4>Iniciar sesion</h4>

        <input
          type="email"
          id="formContactoEmail"
          placeholder=" Ingrese su email"
        />

        <input
          type="password"
          id="formContactoPass"
          placeholder=" Ingrese su password"
        />

        <Link to="/homebanking" className="text-decoration-none">
          <button className="cssbuttons-io-button">
            Iniciar Sesion
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
        <Link to="/registro" className="text-decoration-none mt-4">
          <span className="text-decoration-none">
            No tienes cuenta? Registrate
          </span>
        </Link>
      </form>
    </div>
  );
};

export default FormLogin;
