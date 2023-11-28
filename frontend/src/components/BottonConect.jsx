import React, { useState } from 'react';
import Web3 from 'web3';

const WalletAddress = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectMetaMask = () => {
    // Verifica si MetaMask está instalado
    if (window.ethereum) {
      // Crea una instancia de Web3 utilizando el proveedor de MetaMask
      const web3 = new Web3(window.ethereum);

      // Solicita acceso a la billetera de MetaMask
      window.ethereum.enable()
        .then((accounts) => {
          // Obtiene la dirección de la billetera después de que MetaMask está habilitado
          const address = accounts[0];
          setWalletAddress(address);
        })
        .catch((error) => {
          console.error("Error al habilitar MetaMask:", error);
        });
    } else {
      console.error("MetaMask no está instalado.");
    }
  };

  return (
    <div>
      {walletAddress ? (
        <p>Dirección de la billetera: {walletAddress}</p>
      ) : (
        <div>
          <p>Conéctate a MetaMask para ver la dirección de la billetera.</p>
          <button onClick={connectMetaMask}>Conectar MetaMask</button>
        </div>
      )}
    </div>
  );
};

export default WalletAddress;
