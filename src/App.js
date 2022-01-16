//este es el punto de inicio del sitio.

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
