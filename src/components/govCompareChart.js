import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import '../styles/insightspage.css'

const GovCompareChart = () => {

  const [expByCat, setExpByCat] = useState([]);

  const getExpByCat = async () => {
    try {

      const response = await fetch("http://localhost:5000/expenses")
      const jsonData = await response.json()
      
      setExpByCat(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  };

  const calculateTotal = () => {
    let total = 0;
    for (const data of expByCat) {
      total += data.expense
    }
    return total;
  }
  const expensesRatio = () => {
    let exp = [];
    for(const data of expByCat) {
      const ratio = (data.expense/calculateTotal() * 100).toFixed(2)
      exp.push(ratio)
    }
    return exp
  };

  useEffect(() => {
    getExpByCat();
  }, []);

  const data = {
    labels: [
      'alcohol & tobacco',
      'clothing & footwear', 
      'food',
      'health & personal',
      'household',
      'recreation, education, & reading',
      'shelter',
      'transportation'
    ],
    datasets: [
      {
        label: 'average Canadian expenses (%)',
        data: ['3.45', '4.31', '18.58', '5.34', '14.63', '7.79', '29.32', '16.58'],
        backgroundColor: '#FFCCBC',
      },
      {
        label: 'Your expenses (%)',
        data: expensesRatio(),
        backgroundColor: '#77A6F7',
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
  
  return <div class="govchart">
    <div className='header'>
      <h1 className='govcharttitle'>National Household Spending Comparison</h1>
    </div>
    <Bar data={data} options={options} />
  </div>

}
  

export default GovCompareChart;