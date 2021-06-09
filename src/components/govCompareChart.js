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
      data: ['18.66', '29.63', '14.04', '3.63', '17.61', '5.64', '7.15', '3.64'],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Your expenses (%)',
      data: ['17.85', '29.35', '14.64', '4.34', '17.27', '5.59', '7.69', '3.26'],
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