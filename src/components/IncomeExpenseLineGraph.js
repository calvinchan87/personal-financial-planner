import React from 'react';
import { Line } from 'react-chartjs-2'

import { yearArray, incomeArray, expensesArray } from '../helpers/incomeExpenses'

import '../../src/styles/lineGraph.css'

const IncomeExpenseLineGraph = () => {
  return <div class="linegraph">
    <Line
     data = {{
      labels: yearArray(),
      datasets: [
        {
        label: 'Income ($)',
        data: incomeArray(),
        fill: false,
        tension: 0.1,
        backgroundColor: '#00887A',
        borderColor: '#00887A',
      },
      {
        label: 'Expenses ($)',
        data: expensesArray(),
        backgroundColor: '#FFCCBC',
        borderColor: '#FFCCBC'
      },
    ],
  }}
  options={{ 
    maintainAspectRatio: true,
   }}
    />
  </div>
}

export default IncomeExpenseLineGraph;