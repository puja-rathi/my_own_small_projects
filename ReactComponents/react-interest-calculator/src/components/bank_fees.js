import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//BankFees functional component and passed balance, onChargeFees parameters from app.js
const BankFees = ({ balance, onChargeFees }) => {
  const [feeAmount, setFeeAmount] = useState('');
  const [feePercentage, setFeePercentage] = useState('');

  // charge bank fees by using handleFixedFee function
  const handleFixedFee = () => {
    if (feeAmount !== '') {
      onChargeFees(feeAmount);
      setFeeAmount('');
    }
  };

  // charge bank fees by using handlePercentageFee function
  const handlePercentageFee = () => {
    if (feePercentage !== '') {
      const fee = (parseFloat(feePercentage) / 100) * parseFloat(balance);
      onChargeFees(fee);
      setFeePercentage('');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <label>Enter Fixed Fee Amount: </label>
        <input
          id="fixedFee"
          className="form-control"
          value={feeAmount}
          onChange={(e) => setFeeAmount(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleFixedFee}>Charge Fixed Fee</button>
        <br />
        <label>Enter Percentage Fee: </label>
        <input
          id="percentageFee"
          className="form-control"
          value={feePercentage}
          onChange={(e) => setFeePercentage(e.target.value)}
        />
        <button className="btn btn-danger mt-2" onClick={handlePercentageFee}>Charge Percentage Fee</button>
      </div>
    </div>
  );
};

export default BankFees;
