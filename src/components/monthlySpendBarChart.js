import React from 'react';
import { Bar } from 'react-chartjs-2';

import '../styles/insightchart.css'

const data = {
  labels: ['Expenses'],
  datasets: [
    {
      label: 'Previous month',
      data: [],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Current month',
      data: ['2400'],
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

const GroupedBar = () => (
  <div class="barchart1">
    <div className='header'>
      <h1 className='title'>Comparison Chart</h1>
    </div>
    <Bar data={data} options={options} />
  </div>
);

export default GroupedBar;
