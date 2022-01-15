//este es el punto de inicio del sitio.
//ok

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Rutas from './Routes/Rutas';

function App() {

  return (
    <BrowserRouter>
    <Rutas/>
    </BrowserRouter>
  )
}

export default App;