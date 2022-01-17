import SidebarHomebanking from './PagesHomebanking/SidebarHomebanking';
import NavHomebanking from './PagesHomebanking/NavHomebanking/NavHomebanking';
import {Outlet } from "react-router-dom";


const AppHomebanking = () => {

  return (
    <>
    <NavHomebanking/>
    <div className="flex">
    <SidebarHomebanking/>
    <div className="content d-flex justify-content-center align-items-center">
    <Outlet/>
    </div>
    </div>
    </>
  )
}

export default AppHomebanking;
