import React from 'react';
import '../assets/styles/holdings.css';

const Holdings = () => {
  const holdingsData = [
    { instrument: "ADANIPORTS", qty: 40, avgCost: 1257.43, ltp: 1117.60, curVal: 44704.00, pnl: -5593.35, netChg: -11.12, dayChg: 4.77 },
    { instrument: "HYUNDAI", qty: 10, avgCost: 1907.90, ltp: 1783.25, curVal: 17832.50, pnl: -1246.55, netChg: -6.53, dayChg: 0.89 },
    { instrument: "IREDA", qty: 100, avgCost: 221.41, ltp: 206.35, curVal: 20635.00, pnl: -1505.70, netChg: -6.80, dayChg: 3.20 },
    { instrument: "ITC", qty: 55, avgCost: 491.51, ltp: 436.70, curVal: 24018.50, pnl: -3014.65, netChg: -11.15, dayChg: -0.54 },
    { instrument: "IXIGO", qty: 170, avgCost: 169.18, ltp: 147.15, curVal: 25015.50, pnl: -3745.89, netChg: -13.02, dayChg: 2.97 },
    { instrument: "RELIANCE", qty: 15, avgCost: 1225.55, ltp: 1238.55, curVal: 18578.25, pnl: 195.00, netChg: 1.06, dayChg: -0.12 },
    { instrument: "SUZLON", qty: 225, avgCost: 74.49, ltp: 57.17, curVal: 12863.25, pnl: -3897.88, netChg: -23.26, dayChg: 5.00 },
    { instrument: "TITAGARH", qty: 41, avgCost: 1411.30, ltp: 1009.45, curVal: 41387.45, pnl: -16475.85, netChg: -28.47, dayChg: 0.87 }
  ];

  const totalInvestment = 240319.32;
  const currentValue = 205034.45;
  const daysPnL = 4370.45;
  const totalPnL = -35284.87;

  return (
    <div className="holdings-container">
      <div className="notification-banner">
        The shares of ITC Hotels, resulting from the <a href="#">demerger</a> of ITC, have been credited to your Demat account. These shares will show in your Kite holdings once they are listed on the exchanges. Until then, you can view them in your Console holdings under the ISIN (INE379A01028).
      </div>

      <div className="holdings-header">
        <div className="holdings-title">
          Holdings <span className="holdings-count">(8)</span>
        </div>
        <input type="text" className="search-bar" placeholder="Search" />
        <div className="holdings-actions">
          <a href="#" className="action-button">Authorisation</a>
          <a href="#" className="action-button">Family</a>
          <a href="#" className="action-button">Analytics</a>
          <a href="#" className="action-button">Download</a>
        </div>
      </div>

      <div className="value-summary">
        <div className="summary-item">
          <div className="summary-value">₹{totalInvestment.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
          <div className="summary-label">Total investment</div>
        </div>
        <div className="summary-item">
          <div className="summary-value">₹{currentValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
          <div className="summary-label">Current value</div>
        </div>
        <div className="summary-item">
          <div className="summary-value">
            <span className="positive">+{daysPnL.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            <span className="positive"> (+2.18%)</span>
          </div>
          <div className="summary-label">Day's P&L</div>
        </div>
      </div>

      <table className="holdings-table">
        <thead>
          <tr>
            <th>Instrument</th>
            <th className="numeric">Qty.</th>
            <th className="numeric">Avg. cost</th>
            <th className="numeric">LTP</th>
            <th className="numeric">Cur. val</th>
            <th className="numeric">P&L</th>
            <th className="numeric">Net chg.</th>
            <th className="numeric">Day chg.</th>
          </tr>
        </thead>
        <tbody>
          {holdingsData.map((holding) => (
            <tr key={holding.instrument}>
              <td className="instrument-name">{holding.instrument}</td>
              <td className="numeric">{holding.qty}</td>
              <td className="numeric">{holding.avgCost.toFixed(2)}</td>
              <td className="numeric">{holding.ltp.toFixed(2)}</td>
              <td className="numeric">{holding.curVal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
              <td className={`numeric ${holding.pnl >= 0 ? 'positive' : 'negative'}`}>
                {holding.pnl.toFixed(2)}
              </td>
              <td className={`numeric ${holding.netChg >= 0 ? 'positive' : 'negative'}`}>
                {`${holding.netChg >= 0 ? '+' : ''}${holding.netChg.toFixed(2)}%`}
              </td>
              <td className={`numeric ${holding.dayChg >= 0 ? 'positive' : 'negative'}`}>
                {`${holding.dayChg >= 0 ? '+' : ''}${holding.dayChg.toFixed(2)}%`}
              </td>
            </tr>
          ))}
          <tr className="total-row">
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="numeric">{currentValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
            <td className="numeric negative">{totalPnL.toFixed(2)}</td>
            <td className="numeric negative">-14.68%</td>
            <td className="numeric positive">+2.18%</td>
          </tr>
        </tbody>
      </table>

      <div className="progress-bar"></div>
    </div>
  );
};

export default Holdings;