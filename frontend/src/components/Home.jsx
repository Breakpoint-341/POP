import React from 'react';
import SellNFT from './SellNFT';
import BibliotecaPersonal from './BibiotecaPersonal';

const MiComponente = () => {
  const containerStyle = {
    display: 'flex',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url("https://i.ibb.co/J2ztGPB/Constellations-hero.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflowY: 'auto'
  };

  const contentContainerStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <div style={contentContainerStyle}>
        <h1>Biblioteca Personal</h1>
          <BibliotecaPersonal />
      </div>
      <div style={contentContainerStyle}>
        <SellNFT />
      </div>
    </div>
  );
}

export default MiComponente;