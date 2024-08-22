import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a Bordamita!" />
    </div>
  );
};

export default App;