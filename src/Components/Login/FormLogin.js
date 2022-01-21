import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormLogin = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

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
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.formContactoPass)) {
            errores.formContactoPass = "Ingrese una password valida";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <div className="container2">
            <Form className="form-login">
              <h4>Iniciar Sesión</h4>

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

              <div>
                <Field name="pais" as="select">
                  <option value="mexico">Mexico</option>
                  <option value="spain">España</option>
                  <option value="Argentina">Argentina</option>
                </Field>
              </div>

              <div>
                <label>
                  <Field type="radio" name="sexo" value="hombre" />
                  Hombre
                </label>
                <label>
                  <Field type="radio" name="sexo" value="mujer" />
                  Mujer
                </label>
              </div>

              <div>
                <Field name="mensaje" as="textarea" placeholder="Mensaje" />
              </div>

              <button type="submit">Enviar</button>
              {formularioEnviado && (
                <small className="exito">Formulario enviado con exito</small>
              )}

              <Link to="/registro" className="text-decoration-none mt-4">
                <span className="text-decoration-none">
                  No tienes cuenta? Registrate
                </span>
              </Link>
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
