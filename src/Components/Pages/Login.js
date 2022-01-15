import React from "react";
import FormLogin from "../Login/FormLogin";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <Navbar />
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
