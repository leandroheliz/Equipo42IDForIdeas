import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/PagesBanco/Home";
import About from "../Components/Pages/PagesBanco/About";
import PreguntasFrecuentes from "../Components/Pages/PagesBanco/PreguntasFrecuentes";
import Contacto from "../Components/Pages/PagesBanco/Contacto";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Error404 from "../Components/Pages/PagesBanco/Error404";

const Rutas = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="wrap">
          <Routes>
            <Route path="about" element={<About />} />
            <Route
              path="preguntas_frecuentes"
              element={<PreguntasFrecuentes />}
            />
            <Route path="contacto" element={<Contacto />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Rutas;
