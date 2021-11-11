import React from 'react';
import logo from './logo.svg';
import './App.css';
import City from './components/City';
import Page from './components/Page';
import Warehouse from './components/Warehouse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page />
        <City />
        <Warehouse />
      </header>
    </div>
  );
}

export default App;
