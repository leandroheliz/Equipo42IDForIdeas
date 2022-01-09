import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Pages/Home';
import About from '../Components/Pages/About';
import PreguntasFrecuentes from '../Components/Pages/PreguntasFrecuentes';
import Contacto from '../Components/Pages/Contacto';
import Login from '../Components/Login/Login';

const DashboardRoutes = () => {
  return (
    <>
         <Navbar/>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="preguntas_frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="contacto" element={<Contacto/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default DashboardRoutes;