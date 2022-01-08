import React, { useState, useEffect } from 'react';
import './index.css';
import Login from './Components/Login/Login';
import Home from './Components/Views/Home';

function App() {

  const [ usuario, setUsuario ] = useState(null);

  return (
    <>
    { usuario ? <Home/> :  <Login /> }
    </>
  )
}

export default App;