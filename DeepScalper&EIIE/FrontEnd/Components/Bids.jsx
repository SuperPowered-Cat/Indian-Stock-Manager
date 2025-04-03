import React from 'react';
import '../assets/styles/bids.css';

const Bids = () => {
  const ipoData = [
    { name: 'BARFLEX', date: '10th – 15th Jan', price: '57 – 60', minAmount: '114000', status: 'Apply' },
    { name: 'LAXMIDENTAL', date: '13th – 15th Jan', price: '407 – 428', minAmount: '13431', status: 'Apply' },
    { name: 'STALLION', date: '16th – 20th Jan', price: '85 – 90', minAmount: '14025', status: 'Pre-apply' },
    { name: 'RIKHAV', date: '15th – 17th Jan', price: '82 – 86', minAmount: '131200', status: 'Upcoming' },
    { name: 'KKJEWELS', date: '15th – 17th Jan', price: '121 – 128', minAmount: '121000', status: 'Upcoming' },
    { name: 'ANYA', date: '26th – 30th Dec 2024', price: '13 – 14', minAmount: '130000', status: 'Closed' },
    { name: 'CITICHEM', date: '27th – 31st Dec 2024', price: '70', minAmount: '140000', status: 'Closed' },
    { name: 'INDOFARM', date: '31st Dec 2024 – 2nd Jan 2025', price: '204 – 215', minAmount: '140076', status: 'Closed' },
    { name: 'TECHNICHEM', date: '31st Dec 2024 – 2nd Jan 2025', price: '52 – 55', minAmount: '104000', status: 'Closed' },
    { name: 'VANDU', date: '1st – 3rd Jan', price: '51 – 52', minAmount: '102000', status: 'Closed' },
  ];

  return (
    <div className="bids-container">
      <h1>IPOs</h1>
      <table className="bids-table">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Date</th>
            <th>Price (₹)</th>
            <th>Min. Amount (₹)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ipoData.map((ipo, index) => (
            <tr key={index} className={`status-${ipo.status.toLowerCase()}`}>
              <td>{ipo.name}</td>
              <td>{ipo.date}</td>
              <td>{ipo.price}</td>
              <td>{ipo.minAmount}</td>
              <td>
                <button className={`btn-${ipo.status.toLowerCase()}`}>{ipo.status}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bids;
