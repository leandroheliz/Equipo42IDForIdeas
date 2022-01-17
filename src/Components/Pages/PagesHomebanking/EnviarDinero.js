import React from 'react'

const EnviarDinero = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col">
            <span><i className="fas fa-plus-circle"></i> Nueva Transferencia</span>
          </div>
          <div className="col">
            <span><i className="fas fa-users"></i> Enviar a un amigo</span>
          </div>
          <div className="col">
            <span><i className="fas fa-id-card"></i> Enviar a otra cuenta propia</span>
          </div>
        </div>
      </div>
        <br/>
        <div className="container-fluid">
        <div className="row">
          <div className="col">
            <span><i className="fas fa-file-invoice-dollar"></i> Mis Cuentas</span>
          </div>
          <div className="col">
            <span><i className="far fa-address-book"></i> Contactos</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default EnviarDinero;