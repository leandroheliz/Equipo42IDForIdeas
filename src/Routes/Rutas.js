import { Routes, Route } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import Homebanking from '../Components/Pages/Homebanking';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/homebanking" element={<Homebanking />} />
        <Route path="/*" element={<DashboardRoutes/>} />
      </Routes>
    </>
  )
}

export default Rutas;