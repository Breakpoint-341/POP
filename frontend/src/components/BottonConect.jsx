import React, { useState } from 'react';
import Web3 from 'web3';

const WalletAddress = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const connectMetaMask = () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);

      window.ethereum.enable()
        .then((accounts) => {
          const address = accounts[0];
          setWalletAddress(address);
          web3.eth.net.getId()
            .then((networkId) => {
              const sepoliaTestnetId = 11155111;
              if (networkId !== sepoliaTestnetId) {
                window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: `0x${sepoliaTestnetId.toString(16)}`, // Hexadecimal
                      chainName: 'Sepolia Testnet',
                      nativeCurrency: {
                        name: 'SepoliaETH',
                        symbol: 'SepoliaETH',
                        decimals: 18,
                      },
                      // Elimina la referencia a la API aquí
                      rpcUrls: [], // Deja esto vacío
                      blockExplorerUrls: ['https://sepolia.etherscan.io/'],
                    },
                  ],
                })
                  .then(() => {
                    console.log('Conectado a Sepolia Testnet(ETH)');
                    closeModal();

                    // Mostrar alerta después de cerrar el modal
                    setTimeout(() => {
                      alert('Los POP serán recibidos en SepoliaETH.');
                    }, 100);
                  })
                  .catch((error) => {
                    console.error('Error al cambiar la red:', error);
                  });
              } else {
                // Conexión exitosa a Sepolia Testnet(ETH)
                console.log('Conectado a Sepolia Testnet(ETH)');
                closeModal();

                // Mostrar alerta después de cerrar el modal
                setTimeout(() => {
                  alert('Los POP serán recibidos en Polygon Mumbai.');
                }, 100);
              }
            })
            .catch((error) => {
              console.error('Error al obtener el ID de la red:', error);
            });
        })
        .catch((error) => {
          console.error("Error al habilitar MetaMask:", error);
        });
    } else {
      console.error("MetaMask no está instalado.");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const metamaskIconUrl = 'icon-128.png'; // Reemplaza con la ruta correcta de tu icono

  // Estilos en línea para el modal y su contenido
  const modalStyle = {
    display: isModalOpen ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  };

  const closeBtnStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '20px',
    cursor: 'pointer',
  };

  const iconContainerStyle = {
    marginBottom: '20px',
  };

  const iconStyle = {
    width: '100px', // Ajustar según sea necesario
    height: '100px', // Ajustar según sea necesario
  };

  const buttonContainerStyle = {
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #007BFF, #00BFFF)', // Degradado azul
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background 0.3s',
  };

  const changeNetworkButtonStyle = {
    ...buttonStyle,
    background: 'linear-gradient(to right, #004080, #007BFF)', // Degradado azul oscuro
  };

  // Estilo del botón al hacer clic (efecto de agua)
  const activeButtonStyle = {
    transform: 'scale(0.95)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div>
      {walletAddress ? (
        <div>
          <p>Wallet Address: {walletAddress}</p>
          <button onClick={disconnectWallet} style={buttonStyle}>
            Disconnect
          </button>
        </div>
      ) : (
        <div>
          <p>Connect Your Wallet </p>
          <button
            onClick={openModal}
            style={{ ...buttonStyle, ...activeButtonStyle }}
          >
            Conectar
          </button>

          <div style={modalStyle}>
            <div style={modalContentStyle}>
              <span style={closeBtnStyle} onClick={closeModal}>&times;</span>

              {/* Contenedor del icono */}
              <div style={iconContainerStyle}>
                {/* Icono de MetaMask */}
                <img src={metamaskIconUrl} alt="MetaMask Icon" style={iconStyle} />
              </div>

              <p>
                Por favor, cambie a la red de Polygon Mumbai antes de conectarse.
              </p>

              <div style={buttonContainerStyle}>
                <button
                  onClick={connectMetaMask}
                  style={{ ...changeNetworkButtonStyle, ...activeButtonStyle }}
                >
                  Conectar
                </button>
                <button
                  onClick={closeModal}
                  style={{ ...buttonStyle, ...activeButtonStyle }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletAddress;
