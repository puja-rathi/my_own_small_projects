import React, { useState } from 'react';

const InputBalance = ({ onDeposit, onWithdrawal, onAddInterest }) => {
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');

  //handleDeposit function and call onDeposit to calculate deposit 
  const handleDeposit = () => {
    if (amount !== '') {
      onDeposit(amount);
      //reset input field value by using setAmount function 
      setAmount('');
    }
  };

  //handleWithdrawal function and call onWithdrawal to calculate Withdrawal 
  const handleWithdrawal = () => {
    if (amount !== '') {
      onWithdrawal(amount);
      setAmount('');
    }
  };

  //handleAddInterest function and call onAddInterest to calculate Interest
  const handleAddInterest = () => {
    if (interestRate !== '') {
      onAddInterest(interestRate);
      setInterestRate('');
    }
  };

//input and button elements to enter value or to perform calculations
  return (
    <div className="card">
      <div className="card-body">
        <label>Enter Deposit Amount: </label>
        <input
          id="newdeposit"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleDeposit}>Deposit</button>
        <button className="btn btn-danger mt-2 mx-2" onClick={handleWithdrawal}>Withdraw</button>
        <br />
        <label>Enter Interest Rate: </label>
        <input
          id="interestRate"
          className="form-control"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <button className="btn btn-success mt-2" onClick={handleAddInterest}>Add Interest</button>
      </div>
    </div>
  );
};

export default InputBalance;
