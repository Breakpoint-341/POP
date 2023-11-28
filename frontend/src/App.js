import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Home />
        {/* Other components and content */}
      </div>
    </div>
  );
};

export default App;
