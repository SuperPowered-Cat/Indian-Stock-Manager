import React from 'react';
import '../assets/styles/funds.css';

const Funds = () => {
  const equityData = [
    { label: 'Available margin', value: '0.00' },
    { label: 'Used margin', value: '0.00' },
    { label: 'Available cash', value: '0.00' },
    { label: 'Opening balance', value: '0.00' },
    { label: 'Payin', value: '0.00' },
    { label: 'Payout', value: '0.00' },
    { label: 'SPAN', value: '0.00' },
    { label: 'Delivery margin', value: '0.00' },
    { label: 'Exposure', value: '0.00' },
    { label: 'Options premium', value: '0.00' },
    { label: 'Collateral (Liquid funds)', value: '0.00' },
    { label: 'Collateral (Equity)', value: '0.00' },
    { label: 'Total collateral', value: '0.00' },
  ];

  return (
    <div className="funds-container">
      <div className="header">
        <h1>Funds</h1>
        <div className="buttons">
          <button className="btn-add-funds">Add funds</button>
          <button className="btn-withdraw">Withdraw</button>
        </div>
      </div>
      <div className="funds-content">
        <div className="funds-section">
          <h2>Equity</h2>
          {equityData.map((item, index) => (
            <div className="funds-row" key={index}>
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        <div className="funds-section">
          <h2>Commodity</h2>
          {equityData.map((item, index) => (
            <div className="funds-row" key={index}>
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Funds;

