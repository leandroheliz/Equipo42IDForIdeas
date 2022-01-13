import { Routes, Route } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import Homebanking from '../Components/Pages/Homebanking';
import PerfilUsuario from '../Components/PerfilUsuario/PerfilUsuario';
import NavbarHomebanking from '../Components/Pages/NavHomebanking/NavHomebanking';
import SidebarHomebanking from '../Components/SidebarHomebanking';
import Cuentas from '../Components/Pages/PagesHomebanking/Cuentas';


const Rutas = () => {
  return (
    <>
        <NavbarHomebanking/>
      <Routes>
        <Route path="/homebanking" element={<Homebanking />} />
        <Route path="/perfilusuario" element={<PerfilUsuario />} />
        <Route path="/cuentas" element={<Cuentas />} />
        <Route path="/*" element={<DashboardRoutes/>} />
      </Routes>
      <SidebarHomebanking/>
    </>
  )
}

export default Rutas;