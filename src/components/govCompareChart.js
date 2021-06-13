import React from 'react';
import { Bar } from 'react-chartjs-2';

import '../styles/insightchart.css'

const data = {
  labels: [
    'food',
    'shelter', 
    'household',
    'clothing & footwear',
    'transportation',
    'health & personal care',
    'recreation, education and reading',
    'alcoholic beverages & tobacco'
  ],
  datasets: [
    {
      label: 'average Canadian expenses (%)',
      data: ['18.58', '29.32', '14.63', '4.31', '16.58', '5.34', '7.79', '3.45'],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Your expenses (%)',
      data: ['18.28', '47.11', '9.38', '9.49', '7.29', '0.74', '3.60', '4.11'],
      backgroundColor: 'rgb(54, 162, 235)',
    }
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GroupedBar2 = () => (
  <div class="barchart2">
    <div className='header'>
      <h1 className='title'>Government Chart</h1>
    </div>
    <Bar data={data} options={options} />
  </div>
);

export default GroupedBar2;