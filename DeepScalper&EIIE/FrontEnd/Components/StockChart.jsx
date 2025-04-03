// import React from 'react';
// import { Chart, registerables } from 'chart.js';
// import { Candlestick } from 'react-chartjs-2';

// Chart.register(...registerables);

// const StockChart = () => {
    const stockData = [
        { date: '2025-01-01', open: 100, high: 110, low: 90, close: 105 },
        { date: '2025-01-02', open: 105, high: 115, low: 95, close: 110 },
        // Add more data points as needed
    ];

    const data = {
        datasets: [{
            label: 'Stock Prices',
            data: stockData.map(item => ({
                x: item.date,
                o: item.open,
                h: item.high,
                l: item.low,
                c: item.close
            })),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }]
    };

    // const options = {
    //     scales: {
    //         x: {
    //             type: 'time',
    //             time: {
    //                 unit: 'day'
    //             }
    //         },
    //         y: {
    //             beginAtZero: false
    //         }
    //     }
    // };

//     return (
//         <div>
//             <h2>Stock Market Chart</h2>
//             <Candlestick data={data} options={options} />
//         </div>
//     );
// };

// export default StockChart;

import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const StockChart = () => {
  useEffect(() => {
    return () => {
      const chart = ChartJS.getChart("stockChart");
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  const stockData = [
    { date: '2025-01-01', open: 100, high: 110, low: 90, close: 105 },
    { date: '2025-01-02', open: 105, high: 115, low: 95, close: 110 },
    { date: '2025-01-03', open: 110, high: 120, low: 100, close: 115 },
    { date: '2025-01-04', open: 115, high: 125, low: 105, close: 120 },
  ];

  const data = {
    labels: stockData.map(item => item.date),
    datasets: [
      {
        label: 'Close Price',
        data: stockData.map(item => item.close),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.1
      },
      {
        label: 'High Price',
        data: stockData.map(item => item.high),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.1
      },
      {
        label: 'Low Price',
        data: stockData.map(item => item.low),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true
        },
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        grid: {
          display: true
        },
        title: {
          display: true,
          text: 'Price'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stock Price Chart'
      }
    }
  };

  return (
    <div style={{ width: '100%', height: '500px', padding: '20px' }}>
      <Line 
        id="stockChart"
        data={data}
        options={options}
      />
    </div>
  );
};

export default StockChart;