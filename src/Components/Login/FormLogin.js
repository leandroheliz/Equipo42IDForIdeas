import { Formik, Form, Field, ErrorMessage } from "formik";
// import { React, useState } from "react";
// import { Link } from "react-router-dom";
// import cors from "cors";
import axios from "axios";

const FormLogin = () => {
  const getToken = (user) => {
    axios
      .post("https://backend-equipo42-idf-or-ideas.vercel.app/user/token", {
        email: user.email,
        password: user.password,
      })
      .then((data) => {
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
          getToken(user);
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
