import React, { useState } from 'react';
import Web3 from 'web3';

const WalletAddress = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectMetaMask = () => {
      if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
       window.ethereum.enable()
        .then((accounts) => {
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
