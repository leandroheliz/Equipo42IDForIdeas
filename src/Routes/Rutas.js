import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Pages/Home';
import About from '../Components/Pages/About';
import PreguntasFrecuentes from '../Components/Pages/PreguntasFrecuentes';
import Contacto from '../Components/Pages/Contacto';
import FormLogin from '../Components/Login/FormLogin';
import FormRegistro from '../Components/Login/FormRegistro';

const Rutas = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/preguntas_frecuentes" element={<PreguntasFrecuentes />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/login" element={<FormLogin />}/>
        <Route path="/registro" element={<FormRegistro />}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default Rutas;

//estan las rutas generales y las del homebanking

