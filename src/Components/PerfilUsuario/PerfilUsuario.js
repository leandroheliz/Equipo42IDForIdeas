import fotoPerfil from './Img/perfil.jpg';

const PerfilUsuario = () => {
  return (
    <div style={{ zIndez: "10" }}>
      <div className="d-flex justify-content-end">
        <img src={fotoPerfil} alt="" className="rounded-circle" style={{height:"100px", width:"100px"}}/>
      <div className="flex-direction-end">
      <button className="btn">
      <i className="fas fa-camera"></i>
      </button>
      </div>
      </div>
      <br/>
      <div className="container">
      <div className="row">
        <div className="col colPerfil">
      <span>Nombre:</span>
      <span>Apellido:</span>
      <span>Fecha de Nacimiento:</span>
      <span>DNI:</span>
      <span>CUIL:</span>
      <span>Dirección</span>
      <span>Correo:</span>
      <span>Teléfono:</span>
      <span>Mi CBU y Alias</span>
      <br/>
      <span>Fecha de último inicio de sesión:</span>
      <span className="text-center">Soporte</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
