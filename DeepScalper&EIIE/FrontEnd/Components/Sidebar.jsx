import React from 'react';
import '../assets/styles/Sidebar.css';

const Sidebar = () => {
    const data = [
        { name: 'GOLDBEES', change: '-0.29 (-0.45%)', value: '63.68', isPositive: false },
        { name: 'HDFCBANK', change: '-2.90 (-0.16%)', value: '1798.10', isPositive: false },
        { name: 'HINDUNILVR', change: '-3.35 (-0.14%)', value: '2355.55', isPositive: false },
        { name: 'INFY', change: '-15.25 (-0.79%)', value: '1909.05', isPositive: false },
        { name: 'ONGC', change: '-1.90 (-0.79%)', value: '238.95', isPositive: false },
        { name: 'TCS', change: '+21.20 (0.51%)', value: '4179.50', isPositive: true },
        { name: 'NIFTY 50', change: '-25.80 (-0.11%)', value: '23727.65', isPositive: false },
        { name: 'NIFTYETF', change: '-0.38 (-0.15%)', value: '253.31', isPositive: false },
    ];

    return (
        <div className="sidebar">
            <div className="search-bar">
                <input type="text" placeholder="Search eg: infy bse, nifty fut, etc" />
                <span className="counter">8 / 100</span>
            </div>
            <div className="stocks-list">
                {data.map((item, index) => (
                    <div className={`stock-item ${item.isPositive ? 'positive' : 'negative'}`} key={index}>
                        <span className="stock-name">{item.name}</span>
                        <span className="stock-change">{item.change}</span>
                        <span className="stock-value">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
