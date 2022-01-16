import { Routes, Route } from "react-router-dom";
import Rutas from './Rutas';
import AppHomebanking from "../Components/Pages/AppHomebanking";

const AppRouter = () => {
  return (
    <>
     <Routes>
       <Route path="appHomebanking" element={<AppHomebanking />}/>
        <Route path="/*" element={<Rutas/>}/> 
     </Routes> 
    </>
  )
}

export default AppRouter;