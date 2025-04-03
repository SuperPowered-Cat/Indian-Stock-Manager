/*import React, { useState } from 'react';
import '../assets/styles/dashboard.css'; // Import CSS for styling

function Dashboard() {
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div>
      <button onClick={toggleDashboard}>Dashboard</button>
      {showDashboard && (
        <div className="dashboard-container">
          {/* Analytics content 
          <div className="equity">
            <h2>Equity</h2>
            <div>
              <p>0</p>
              <p>Margin available</p>
            </div>
            <div>
              <p>Margins used 0</p>
              <p>Opening balance 0</p>
              <button>View statement</button>
            </div>
          </div>
          <div className="commodity">
            <h2>Commodity</h2>
            <div>
              <p>0</p>
              <p>Margin available</p>
            </div>
            <div>
              <p>Margins used 0</p>
              <p>Opening balance 0</p>
              <button>View statement</button>
            </div>
          </div>
          <div className="holdings">
            <h2>Holdings (8)</h2>
            <div>
              <p>-35.28k</p>
              <p>P&L</p>
            </div>
            <div>
              <p>-14.68%</p>
              <p>₹2,05,034.45</p>
            </div>
            <div>
              <p>Current value 2.05L</p>
              <p>Investment 2.4L</p>
            </div>
          </div>
          <div className="market-overview">
            <h2>Market overview</h2>
            {/* Add market overview chart or data 
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;*/

import React from 'react';
import '../assets/styles/dashboard.css';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

function Dashboard() {
  // Sample data for the NIFTY graph
  const marketData = [
    { value: 100 },
    { value: 120 },
    { value: 110 },
    { value: 130 },
    { value: 115 },
    { value: 125 },
    { value: 105 },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-greeting">Hi, Satyanshu</h1>
  
      </header>

      {/* Cards Container */}
      <div className="cards-container">
        {/* Equity Card */}
        <div className="card">
          <div className="card-title">
            <span className="icon">⏱️</span>
            <span>Equity</span>
          </div>
          <div className="margin-details">
            <div className="margin-item">
              <div className="margin-value">0</div>
              <div className="margin-label">Margin available</div>
            </div>
          </div>
          <div className="margin-details">
            <div className="margin-item">
              <div className="margin-label">Margins used</div>
              <div className="text-large">0</div>
            </div>
            <div className="margin-item">
              <div className="margin-label">Opening balance</div>
              <div className="text-large">0</div>
            </div>
          </div>
          <a href="#" className="view-statement">View statement</a>
        </div>

        {/* Commodity Card */}
        <div className="card">
          <div className="card-title">
            <span className="icon">⭕</span>
            <span>Commodity</span>
          </div>
          <div className="margin-details">
            <div className="margin-item">
              <div className="margin-value">0</div>
              <div className="margin-label">Margin available</div>
            </div>
          </div>
          <div className="margin-details">
            <div className="margin-item">
              <div className="margin-label">Margins used</div>
              <div className="text-large">0</div>
            </div>
            <div className="margin-item">
              <div className="margin-label">Opening balance</div>
              <div className="text-large">0</div>
            </div>
          </div>
          <a href="#" className="view-statement">View statement</a>
        </div>
      </div>

      {/* Holdings Section */}
      <div className="holdings">
        <div className="holdings-header">
          <span className="icon">📊</span>
          <h2>Holdings</h2>
          <span className="holdings-count">(8)</span>
        </div>

        <div className="pnl">-35.28k</div>
        <div className="pnl-percentage">-14.68%</div>

        <div className="value-bar">
          <div className="value-bar-segments">
            <div className="segment segment-1" style={{ width: '40%' }}></div>
            <div className="segment segment-2" style={{ width: '30%' }}></div>
            <div className="segment segment-3" style={{ width: '15%' }}></div>
            <div className="segment segment-4" style={{ width: '15%' }}></div>
          </div>
        </div>

        <div className="text-large">₹2,05,034.45</div>

        <div className="value-details">
          <label className="value-item">
            <span className="radio-button active"></span>
            Current value
          </label>
          <label className="value-item">
            <span className="radio-button"></span>
            Investment value
          </label>
          <label className="value-item">
            <span className="radio-button"></span>
            P&L
          </label>
        </div>

        <div className="margin-details">
          <div className="margin-item">
            <div className="margin-label">Current value</div>
            <div className="text-large">2.05L</div>
          </div>
          <div className="margin-item">
            <div className="margin-label">Investment</div>
            <div className="text-large">2.4L</div>
          </div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="market-overview">
        <div className="holdings-header">
          <span className="icon">📈</span>
          <h2>Market overview</h2>
        </div>
        <div className="market-graph">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={marketData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#1976d2" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;