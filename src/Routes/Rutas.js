import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/PagesBanco/Home";
import About from "../Components/Pages/PagesBanco/About";
import PreguntasFrecuentes from "../Components/Pages/PagesBanco/PreguntasFrecuentes"
import Contacto from "../Components/Pages/PagesBanco/Contacto";
import Login from "../Components/Pages/PagesBanco/Login";
import Registro from "../Components/Pages/PagesBanco/Registro";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Error404 from "../Components/Pages/PagesBanco/Error404";

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
