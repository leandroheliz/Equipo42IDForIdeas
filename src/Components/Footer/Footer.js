import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col colFooter">
            <h4>Ayuda y guías</h4>
            <span><Link to="/" className="text-white" style={{textDecoration: 'none'}}>App Plus Bank</Link></span>
            <span>Asesoramiento sobre deudas con atraso</span>
            <span>ATM personas con discapacidad visual</span>
            <span>Centro de seguridad</span>    
        </div>
        <div className="col colFooter">
        <span><h4>Conocenos</h4></span>
        <span>Autoridades</span>
        <span>Carta Orgánica</span>
        <span>Estados Financieros</span>
        <span>Prensa y noticias</span>
   
        </div>
        <div className="col colFooter">
        <span><h4>Información legal</h4></span>
        <span>Atención al usuario</span>
        <span>Información al usuario</span>
        <span>Régimen de transparencia del BCRA</span>
        <span>Alyc</span>
        </div>
        <div className="col colFooter">
          <span><h4>Otros sitios de Interés</h4></span>
          <span>Conoce más sobre el Equipo 42</span>
          <span>Developers del proyecto</span>
          <span>Skills de Plus Bank</span>
          <span>Más sobre el proyecto</span>
        </div>
      </div>
      <br/>
      <span className="text-white">Términos y condiciones de navegabilidad de sitio web</span>
      <hr/>
           <span className="text-white">&copy; {new Date().getFullYear()}  Copyright | Plus Bank & Grupo 42 S.A</span>
    </div>
  )
}

export default Footer;