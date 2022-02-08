import AppHomebanking from "../AppHomebanking";
import Login from "../PagesBanco/Login";
import { useState } from "react";
import { getToken } from "../../Helpers/auth-helpers";

function Auth() {
  const [usuario, setUsuario] = useState(null);
  if (getToken()) {
    setUsuario(true);
  }
  return <> {usuario ? <AppHomebanking usuario={usuario} /> : <Login />} </>;
}

export default Auth;
