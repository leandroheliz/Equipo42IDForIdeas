import React from "react";
import NavHomebanking from "./NavHomebanking/NavHomebanking";
import Logo from "../Logo/Logo";
import Actividad from "../Actividad/Actividad";
import Saldo from "../Saldo/Saldo";
import SidebarHomebanking from "../SidebarHomebanking";

const Homebanking = () => {
  return (
    <>
    <div className="row">
    <NavHomebanking />
      <div className="col-4 col-sm-2">
      <SidebarHomebanking/>
      </div>
      <div className="col container d-flex text-center">
            <div className="col colHomebanking">
               <Saldo />
                <br/>
                <Logo />
            </div>
            <div className="col">
              <br/>
            <Actividad />
            </div>
      </div>
    </div>
      </>
  );
};

export default Homebanking;