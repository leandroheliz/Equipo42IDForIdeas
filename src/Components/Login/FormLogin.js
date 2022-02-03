import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import cors from "cors";

const FormLogin = () => {
  return (
    <>
      <Formik
        initialValues={{ formLoginEmail: "", formLoginPass: "" }}
        validate={(values) => {
          let errores = {};

          //Validacion email
          if (!values.formLoginEmail) {
            errores.formLoginEmail = "Por favor ingresa un email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.formLoginEmail
            )
          ) {
            errores.formLoginEmail = "Ingrese un formato de email valido";
          }

          //Validacion password
          if (!values.formLoginPass) {
            errores.formLoginPass = "Por favor ingresa una password";
          } else if (!/^[0-9]{3}$/.test(values.formLoginPass)) {
            errores.formLoginPass = "Ingrese una contraseña valida";
          }

          return errores;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log("Enviado");
          const user = {
            email: values.formLoginEmail,
            password: values.formLoginPass,
          };

          const getToken = () => {
            fetch(
              "https://backend-equipo42-idf-or-ideas.vercel.app/user/token",
              {
                method: "POST",
                mode: "no-cors",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: values.formLoginEmail,
                  password: values.formLoginPass,
                }),
              }
            ).then((res) => {
              console.log(res);
            });
          };
          getToken();
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
