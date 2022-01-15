import { Routes, Route } from 'react-router-dom';
import Login from '../Components/Login/Login';
import Configuracion from '../Components/Pages/Configuracion';
import Homebanking from '../Components/Pages/Homebanking';
import Saldo from '../Components/Saldo/Saldo';
import Rutas from './Rutas';

const RutasAuth = () => {
  return (
    <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="homebanking" element={<Homebanking />}/>
            <Route path="mi_perfil" element={<PerfilUsuario />}/>
            <Route path="saldo" element={<Saldo />}/>
            <Route path="configuracion" element={<Configuracion />}/>
            <Route path="/*" element= {<Rutas/>}/>
    </Routes>
  )
}

export default RutasAuth;