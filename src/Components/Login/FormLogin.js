import { Link } from "react-router-dom";
import { Formik } from "formik";

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
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.formContactoPass)) {
            errores.formContactoPass = "Ingrese una password valida";
          }

          return errores;
        }}
        onSubmit={(valores) => {
          console.log("Enviado");
        }}
      >
        {({
          handleSubmit,
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
        }) => (
          <div className="container2">
            <form onSubmit={handleSubmit} className="form-login">
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
        )}
      </Formik>
    </>
  );
};

export default FormLogin;
