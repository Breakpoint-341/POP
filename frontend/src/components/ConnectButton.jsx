import React, { useState } from 'react';
import Web3 from 'web3';

const ConnectButton = () => {
  const [connected, setConnected] = useState(false);

  const connectToMetaMask = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnected(true);
        console.log('Connected to MetaMask');
      } else {
        console.error('MetaMask not installed');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask', error);
    }
  };

  const buttonStyle = {
    border: '2px solid blue',
    background: 'white',
    padding: '10px',
    cursor: 'pointer',
  };

  const connectedStyle = {
    border: '2px solid green',
    background: 'lightgreen',
    padding: '10px',
    cursor: 'not-allowed',
  };

  return (
    <button
      style={connected ? connectedStyle : buttonStyle}
      onClick={connectToMetaMask}
      disabled={connected}
    >
      {connected ? 'Connected to MetaMask' : 'Connect to MetaMask'}
    </button>
  );
};

export default ConnectButton;