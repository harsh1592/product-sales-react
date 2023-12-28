// SalesChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
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
import { Sales } from '../../types';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
interface SalesChartProps {
  salesData: Sales[];
}

export const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

const SalesChart: React.FC<SalesChartProps> = ({ salesData }) => {
  const data = {
    labels: salesData.map((sale) => sale.weekEnding),
    datasets: [
      {
        label: 'Retail Sales',
        data: salesData.map((sale) => sale.retailSales),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 3,
        fill: false,
        yAxisID: 'y',
      },
      {
        label: 'Retailer Margin',
        data: salesData.map((sale) => sale.retailerMargin),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 3,
        fill: false,
        yAxisID: 'y',
      },
    ],
  };


  return <Line options={options} data={data} />;
};

export default SalesChart;
