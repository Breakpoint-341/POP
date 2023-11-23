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
                width: '10em', 
                height: 'auto', 
                maxWidth: '100%',
                display: 'inline-block', 
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