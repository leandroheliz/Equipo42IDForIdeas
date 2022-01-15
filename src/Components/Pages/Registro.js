import React from "react";
import FormRegistro from "../Login/FormRegistro";
import Navbar from "../Navbar/Navbar";

const Registro = () => {
  return (
    <div>
      <div className="registro-container">
        <Navbar />
        <FormRegistro />
      </div>
    </div>
  );
};

export default Registro;
