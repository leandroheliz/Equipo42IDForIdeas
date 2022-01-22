import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormLogin = () => {
  return (
    <>
      <Formik
        initialValues={{ formContactoEmail: "", formContactoPass: "" }}
        validate={(valores) => {
          let errores = {};

          //Validacion email
          if (!valores.formContactoEmail) {
            errores.formContactoEmail = "Por favor ingresa un email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.formContactoEmail
            )
          ) {
            errores.formContactoEmail = "Ingrese un formato de email valido";
          }

          //Validacion password
          if (!valores.formContactoPass) {
            errores.formContactoPass = "Por favor ingresa una password";
          } else if (!/^[0-9]{3}$/.test(valores.formContactoPass)) {
            errores.formContactoPass = "Ingrese una contraseña valida";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Enviado");
        }}
      >
        {({ errors }) => (
          <div className="container2">
            <Form className="form-login">
              <h4>Inicia Sesión</h4>

              <Field
                type="email"
                id="formContactoEmail"
                placeholder=" Ingrese su email"
                name="formContactoEmail"
              />
              <ErrorMessage
                name="formContactoEmail"
                component={() => (
                  <div className="error">{errors.formContactoEmail}</div>
                )}
              />

              <Field
                type="password"
                id="formContactoPass"
                placeholder=" Ingrese su password"
                name="formContactoPass"
              />
              <ErrorMessage
                name="formContactoPass"
                component={() => (
                  <div className="error">{errors.formContactoPass}</div>
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

        {/*} {({
          handleSubmit,
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
        }) => (
          <div className="container2">
            <form className="form-login" onSubmit={handleSubmit}>
              {console.log(touched)}

              <h4>Iniciar Sesión</h4>

              <input
                type="email"
                id="formContactoEmail"
                placeholder=" Ingrese su email"
                name="formContactoEmail"
                value={values.formContactoEmail}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.formContactoEmail && (
                <div className="error">{errors.formContactoEmail}</div>
              )}

              <input
                type="password"
                id="formContactoPass"
                placeholder=" Ingrese su password"
                name="formContactoPass"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.formContactoPass && (
                <div className="error">{errors.formContactoPass}</div>
              )}

              <button type="submit">Enviar</button>

              <Link to="/registro" className="text-decoration-none mt-4">
                <span className="text-decoration-none">
                  No tienes cuenta? Registrate
                </span>
              </Link>
            </form>
          </div>
        )}*/}
      </Formik>
    </>
  );
};

export default FormLogin;
