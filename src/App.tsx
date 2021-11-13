import React from 'react';
import './App.css';
import DataPage from './components/DataPage';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <div className="App">
      <main className="App-wrapper">
        <OrderForm />
        <DataPage />
      </main>
    </div>
  );
}

export default App;
