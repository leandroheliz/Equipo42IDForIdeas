//esta es la pagina de inicio del sitio.
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