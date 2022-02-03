import { Routes, Route } from "react-router-dom";
import Rutas from "./Rutas";
import AppHomebanking from "../Components/Pages/AppHomebanking";
import Saldo from "../Components/Pages/PagesHomebanking/Saldo/Saldo";
import PerfilUsuario from "../Components/Pages/PagesHomebanking/PerfilUsuario/PerfilUsuario";
import Actividad from "../Components/Pages/PagesHomebanking/Actividad/Actividad";
import Configuracion from "../Components/Pages/PagesHomebanking/Configuracion";
<<<<<<< HEAD
import Tarjeta from '../Components/Pages/PagesHomebanking/Tarjetas/Cards'
import Cuentas from '../Components/Pages/PagesHomebanking/Cuentas/Cuentas'
=======
import Tarjeta from "../Components/Pages/PagesHomebanking/Tarjetas/Tarjeta";
import Cuentas from "../Components/Pages/PagesHomebanking/Cuentas/Cuentas";
>>>>>>> 23df9f9460828d8c047b5bdc61d0916729ba15ff
import Movimientos from "../Components/Pages/PagesHomebanking/Movimientos";
import EnviarDinero from "../Components/Pages/PagesHomebanking/EnviarDinero";
import Inicio from "../Components/Pages/PagesHomebanking/Inicio";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="appHomebanking" element={<AppHomebanking />}>
          <Route index element={<Inicio />} />
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
