import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import Homebanking from "../Components/Pages/Homebanking";
import PerfilUsuario from "../Components/PerfilUsuario/PerfilUsuario";
//import HomebankingInicio from "../Components/Pages/Homebanking_inicio";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/homebanking" element={<Homebanking />}>
          <Route path=":perfilusuario" element={<PerfilUsuario />}></Route>
          <Route path=":saldo" element={<PerfilUsuario />}></Route>
          <Route path=":enviardinero" element={<PerfilUsuario />}></Route>
          <Route path=":tarjetas" element={<PerfilUsuario />}></Route>
          <Route path=":movimientos" element={<PerfilUsuario />}></Route>
          <Route path=":configuracion" element={<PerfilUsuario />}></Route>
        </Route>
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </>
  );
};

export default Rutas;
