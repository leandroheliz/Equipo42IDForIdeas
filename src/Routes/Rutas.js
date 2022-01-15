import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import PreguntasFrecuentes from "../Components/Pages/PreguntasFrecuentes";
import Contacto from "../Components/Pages/Contacto";
import Login from "../Components/Pages/Login";
import Registro from "../Components/Pages/Registro";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/preguntas_frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
};

export default Rutas;