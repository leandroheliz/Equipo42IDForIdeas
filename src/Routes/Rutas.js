import { Routes, Route } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import Homebanking from '../Components/Pages/Homebanking';
import PerfilUsuario from '../Components/PerfilUsuario/PerfilUsuario';
import NavbarHomebanking from '../Components/Pages/NavHomebanking/NavHomebanking';
import SidebarHomebanking from '../Components/SidebarHomebanking';

const Rutas = () => {
  return (
    <>
        <NavbarHomebanking/>
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
      <SidebarHomebanking/>
    </>
  );
};

export default Rutas;
