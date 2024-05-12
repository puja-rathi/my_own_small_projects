// import useState hook from react
import React, { useState } from 'react';
import './App.css';
//import bootstrap .css, .min.js files from bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import all 3 .js files from components folder
import DisplayBalance from './components/display_balance.js';
import InputBalance from './components/input_balance.js';
import BankFees from './components/bank_fees.js';

//created App functional component with 4 diff functions

function App() {
  //balance will store initial value,setBalance will be use to update balance
  const [balance, setBalance] = useState(20000);

  // Function to handle deposit
  const handleDeposit = (amount) => {
    setBalance(balance + parseFloat(amount));
  };

  // Function to handle withdrawal
  const handleWithdrawal = (amount) => {
    if (balance >= parseFloat(amount)) {
      setBalance(balance - parseFloat(amount));
    } else {
      alert('Insufficient balance');
    }
  };

  // Function to handle adding interest
  const handleAddInterest = (rate) => {
    const interest = (balance * parseFloat(rate)) / 100;
    setBalance(balance + interest);
  };

  // Function to handle charging bank fees
  const handleBankFees = (fee) => {
    setBalance(balance - parseFloat(fee));
  };

  return (
    //passed agruments in each component
    <div>
      <DisplayBalance current_balance={balance} />
      <InputBalance onDeposit={handleDeposit} onWithdrawal={handleWithdrawal} onAddInterest={handleAddInterest} />
      <BankFees balance={balance} onChargeFees={handleBankFees} />
    </div>
  );
}

//export App to use in index.js
export default App;
