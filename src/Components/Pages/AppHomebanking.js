import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SidebarHomebanking from '../SidebarHomebanking';
import NavHomebanking from './NavHomebanking/NavHomebanking';
import Saldo from '../Saldo/Saldo';

const AppHomebanking = () => {

  return (
    <BrowserRouter>
    <NavHomebanking/>
    <div className="flex">
    <SidebarHomebanking/>
    <div className="content">
     <Routes>
     <Route path="sidebarHomebanking/:saldo" element={<Saldo />}/>
        {/* <Outlet/> */}
      </Routes> 
  
    </div>
    </div>
    </BrowserRouter>
  )
}

export default AppHomebanking;
