import React from 'react';
import SellNFT from './SellNFT';

const MiComponente = () => {
  const containerStyle = {
    display: 'flex',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url("https://i.ibb.co/J2ztGPB/Constellations-hero.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const contentContainerStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <div style={contentContainerStyle}>
        <h1>Título u otro contenido aquí</h1>
      </div>
      <div style={contentContainerStyle}>
        <SellNFT />
      </div>
    </div>
  );
}

export default MiComponente;