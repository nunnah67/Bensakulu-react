import React from 'react'
import './App.css';
import {Header}  from './components/Header';
import { Bensakulu }  from './components/Bensakulu';
import {Bensakoko } from './components/Bensakoko';
import {Transactionlist} from './components/Transactionlist';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Bensakulu/>
        <Bensakoko />
        <Transactionlist/>
        <AddTransaction/>
        </div>
    </GlobalProvider>
  );
}

export default App;
