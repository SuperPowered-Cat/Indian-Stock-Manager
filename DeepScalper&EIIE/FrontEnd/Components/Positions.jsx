import React from 'react';
import '../assets/styles/positions.css';

const Positions = () => {
  return (
    <>
      <nav className="navigation">
        <a href="#" className="nav-item">Dashboard</a>
        <a href="#" className="nav-item">Orders</a>
        <a href="#" className="nav-item">Holdings</a>
        <a href="#" className="nav-item active">Positions</a>
        <a href="#" className="nav-item">Bids</a>
        <a href="#" className="nav-item">Funds</a>
      </nav>
      
      <div className="positions-container">
        <div className="empty-state">
          <svg 
            className="anchor-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M12 2L12 6M12 22L12 18M4.93 4.93L7.76 7.76M19.07 19.07L16.24 16.24M2 12L6 12M22 12L18 12M4.93 19.07L7.76 16.24M19.07 4.93L16.24 7.76" />
          </svg>
          
          <p className="empty-message">You don't have any positions yet</p>
          
          <button className="get-started-button">
            Get started
          </button>
          
          <a href="#" className="analytics-link">
            <span>Analytics</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Positions;
