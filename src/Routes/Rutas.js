import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Pages/Home';
import About from '../Components/Pages/About';
import PreguntasFrecuentes from '../Components/Pages/PreguntasFrecuentes';
import Contacto from '../Components/Pages/Contacto';
import Registro from '../Components/Login/Registro';

const Rutas = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/preguntas_frecuentes" element={<PreguntasFrecuentes />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/registro" element={<Registro />}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default Rutas;
