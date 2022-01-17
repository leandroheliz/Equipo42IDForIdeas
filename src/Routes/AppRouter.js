import { Routes, Route } from "react-router-dom";
import Rutas from "./Rutas";
import AppHomebanking from "../Components/Pages/AppHomebanking";
import Saldo from "../Components/Saldo/Saldo";
import PerfilUsuario from "../Components/PerfilUsuario/PerfilUsuario";
import Actividad from "../Components/Actividad/Actividad";
import Configuracion from "../Components/Pages/Homebanking/Configuracion";
import Tarjeta from '../Components/Tarjetas/Tarjeta'
import Cuentas from '../Components/Cuentas/Cuentas'
import Movimientos from "../Components/Pages/Homebanking/Movimientos";
import EnviarDinero from "../Components/Pages/Homebanking/EnviarDinero";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="appHomebanking" element={<AppHomebanking />}>
          <Route index element={<Actividad />} />
          <Route path="actividad" element={<Actividad />} />
          <Route path="saldo" element={<Saldo />} />
          <Route path="profile" element={<PerfilUsuario />} />
          <Route path="configuracion" element={<Configuracion />} />
          <Route path="tarjetas" element={<Tarjeta />} />
          <Route path="cuentas" element={<Cuentas />} />
          <Route path="movimientos" element={<Movimientos />} />
          <Route path="enviar_dinero" element={<EnviarDinero />} />
        </Route>
        <Route path="/*" element={<Rutas />} />
      </Routes>
    </>
  );
};

export default AppRouter;

//en movimientos ponemos transacciones tipo transferencias, etc
//queda todo muy al centro, podriamos usar un margin para que no quede muy muy al centro
// tambien podemos rellenar los espacios en blanco con cards
//Okay
