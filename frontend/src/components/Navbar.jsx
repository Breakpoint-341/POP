// import React from 'react';
// import BottonConnect from './BottonConect';


// const Navbar = () => {
//   const navbarStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px',
//     background: 'linear-gradient(to right, #3498db, #87CEEB)', 
//     color: 'white',
//   };

//   const buttonStyle = {
//     padding: '10px',
//     background: 'white',
//     color: 'blue',
//     border: 'none',
//     cursor: 'pointer',
//   };

//   return (
//     <div style={navbarStyle}>
//       <div>
//       <a href="/perfil">
//             <img
//               src="/ChainlinkPOP.png"
//               alt="Icono"
//               style={{
//                 width: '10em', 
//                 height: 'auto', 
//                 maxWidth: '100%',
//                 display: 'inline-block', 
//               }}
//             />
            
//           </a>
//       </div>
//       <div>
      
//         <button style={buttonStyle}><BottonConnect /> </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import BottonConnect from './BottonConect';
import './Navbar.css'

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    background: 'linear-gradient(to right, #3498db, #87CEEB)', 
    color: 'white',
  };

  const buttonStyle = {
    padding: '10px',
    background: 'white',
    color: 'blue',
    border: 'none',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '10em',
    height: 'auto',
    maxWidth: '100%',
    display: 'inline-block',
  };

  return (
    <div style={navbarStyle}>
      <div>
        <a href="/perfil">
          <img
            src="/ChainlinkPOP.png"
            alt="Icono"
            style={imageStyle}
          />
        </a>
      </div>
      <div>
        <button style={buttonStyle}><BottonConnect /></button>
      </div>
    </div>
  );
};

export default Navbar;
