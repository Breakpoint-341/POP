import React, { useState } from 'react';
import { uploadFileToIPFS } from './pinata';

const SellNFT = () => {
  const [setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [message, setMessage] = useState('');
  const [attributes, setAttributes] = useState({
    location: false,
    wallet: false,
    automation: false,
    mutation: false,
    evidence: false,
    golden: false,
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDrop = async (e) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);

    try {
      setMessage('Minting POP Chainlink... Please wait.');
      const fileResponse = await uploadFileToIPFS(droppedFile);

      if (fileResponse.success) {
        setMessage('POP Chainlink minted successfully!');
        setFileURL(fileResponse.pinataURL);
      } else {
        setMessage(`Error minting POP Chainlink: ${fileResponse.message}`);
      }
    } catch (error) {
      setMessage(`Error minting POP Chainlink: ${error.message}`);
    }
  };

  const handleCheckboxChange = (attribute) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attribute]: !prevAttributes[attribute],
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Mint <img src="/POP.bmp" alt="POP" style={{ width: '50px', height: '50px' }} /> Chainlink</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
        <div style={{ width: '45%' }}>
          <div
            style={{
              width: '100%',
              height: '300px',
              border: '2px dashed #ccc',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {fileURL ? (
              <img src={fileURL} alt="Minted" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            ) : (
              <p>Drag & Drop or click to select an image</p>
            )}
          </div>
          <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
          <button
            style={{ marginTop: '10px', padding: '10px', width: '100%', boxSizing: 'border-box' }}
            onClick={() => document.querySelector('input[type=file]').click()}
          >
            Select Image
          </button>
          <button
            style={{ marginTop: '10px', padding: '10px', width: '100%', boxSizing: 'border-box' }}
            onClick={handleCheckboxChange}
          >
            Mint POP Chainlink
          </button>
        </div>
        <div style={{ width: '45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ margin: '10px 0' }}>
            <label>
              <input
                type="checkbox"
                checked={attributes.location}
                onChange={() => handleCheckboxChange('location')}
              />
              Location
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label>
              <input type="checkbox" checked={attributes.wallet} onChange={() => handleCheckboxChange('wallet')} />
              Wallet
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label>
              <input
                type="checkbox"
                checked={attributes.automation}
                onChange={() => handleCheckboxChange('automation')}
              />
              Automation
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label>
              <input
                type="checkbox"
                checked={attributes.mutation}
                onChange={() => handleCheckboxChange('mutation')}
              />
              Mutation
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label>
              <input
                type="checkbox"
                checked={attributes.evidence}
                onChange={() => handleCheckboxChange('evidence')}
              />
              Evidence
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label>
              <input
                type="checkbox"
                checked={attributes.golden}
                onChange={() => handleCheckboxChange('golden')}
              />
              Golden
            </label>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SellNFT;
