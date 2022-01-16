import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import PreguntasFrecuentes from "../Components/Pages/PreguntasFrecuentes";
import Contacto from "../Components/Pages/Contacto";
import Login from "../Components/Pages/Login";
import Registro from "../Components/Pages/Registro";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Error404 from "../Components/Error404";

const Rutas = () => {
  return (
    <>
    <Navbar/>
    <div className="page-container">
    <div className="wrap">
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="preguntas_frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default Rutas;
