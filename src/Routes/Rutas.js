import { Routes, Route } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import Homebanking from '../Components/Pages/Homebanking';
import PerfilUsuario from '../Components/PerfilUsuario/PerfilUsuario';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/homebanking" element={<Homebanking />} />
        <Route path="/perfilusuario" element={<PerfilUsuario />} />
        <Route path="/*" element={<DashboardRoutes/>} />
      </Routes>
    </>
  )
}

export default Rutas;