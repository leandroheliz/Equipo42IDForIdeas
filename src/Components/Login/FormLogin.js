import { Formik, Form, Field, ErrorMessage } from "formik";
import { React } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import cors from "cors";
import {
  setToken,
  getToken,
  initAxiosInterceptors,
} from "../Helpers/auth-helpers";
import axios from "axios";

initAxiosInterceptors();

const FormLogin = () => {
  const navigate = useNavigate();
  const login = async (user) => {
    await axios
      .post("https://backend-equipo42-idf-or-ideas.vercel.app/user/token", {
        email: user.email,
        password: user.password,
      })
      .then((data) => {
        console.log(data.data.accesToken);
        setToken(data.data.accesToken);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Formik
        initialValues={{ formLoginEmail: "", formLoginPass: "" }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log("Enviado");
          const user = {
            email: values.formLoginEmail,
            password: values.formLoginPass,
          };

          console.log(user);
          login(user);
          navigate("/apphomebanking");
        }}
      >
        {({ errors }) => (
          <div className="container2">
            <Form className="form-login">
              <h4>Inicia Sesión</h4>

              <Field
                type="email"
                id="formLoginEmail"
                placeholder=" Ingrese su email"
                name="formLoginEmail"
              />
              <ErrorMessage
                name="formLoginEmail"
                component={() => (
                  <div className="error">{errors.formLoginEmail}</div>
                )}
              />

              <Field
                type="password"
                id="formLoginPass"
                placeholder=" Ingrese su password"
                name="formLoginPass"
              />
              <ErrorMessage
                name="formLoginPass"
                component={() => (
                  <div className="error">{errors.formLoginPass}</div>
                )}
              />

              <div className="container-boton-contacto">
                <button type="submit" className="buttonContacto">
                  Enviar
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default FormLogin;
