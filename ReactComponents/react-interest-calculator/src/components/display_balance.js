import React from 'react';

const DisplayBalance = ({ current_balance }) => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text ">Current Bank Balance is: <strong>{current_balance}</strong></p>
      </div>
    </div>
  );
};

export default DisplayBalance;
