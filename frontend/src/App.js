import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css'; 

const App = () => {
  useEffect(() => {
    // Manejar no-scroll al montar y desmontar el componente
    document.body.style.overflow = 'hidden'; // Bloquear scroll al montar

    return () => {
      document.body.style.overflow = 'visible'; // Habilitar scroll al desmontar
    };
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <Home />
        {/* Otros componentes y contenido */}
      </div>
    </div>
  );
};

export default App;
