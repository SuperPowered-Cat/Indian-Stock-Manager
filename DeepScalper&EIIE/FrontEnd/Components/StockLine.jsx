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
import 'chartjs-adapter-date-fns';

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
    datasets: [{
      label: 'Stock Price',
      data: stockData.map(item => item.close),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Price'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
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