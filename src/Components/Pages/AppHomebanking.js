import { Routes, Route } from 'react-router-dom';
import SidebarHomebanking from '../SidebarHomebanking';
import NavHomebanking from './NavHomebanking/NavHomebanking';

const AppHomebanking = () => {

  return (
    <>
    <NavHomebanking/>
    <div className="flex">
    <SidebarHomebanking/>
    <div className="content">
     <Routes>
        <Route path="/perfil_usuario"/>
      </Routes> 
      123 
    </div>
    </div>
    </>
  )
}

export default AppHomebanking;

//Aca va outlet?
