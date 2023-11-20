import React from 'react';
import ConnectButton from './ConnectButton';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    background: 'linear-gradient(to right, #3498db, #87CEEB)', // Azul a celeste
    color: 'white',
  };

  const buttonStyle = {
    padding: '10px',
    background: 'white',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={navbarStyle}>
      <div>
      <a href="/perfil">
            <img
              src="/ChainlinkPOP.png"
              alt="Icono"
              style={{
                width: '10em', // Puedes ajustar el tamaño según tus necesidades
                height: 'auto', // Esto asegura que la altura se ajuste automáticamente
                maxWidth: '100%', // Limita el tamaño máximo en pantallas más grandes
                display: 'inline-block', // Asegura que el contenido a su alrededor no se vea afectado
              }}
            />
            
          </a>
      </div>
      <div>
        <button style={buttonStyle}><ConnectButton /></button>
      </div>
    </div>
  );
};

export default Navbar;