import React from 'react';
import { Line } from 'react-chartjs-2'

import '../../src/styles/lineGraph.css'

const IncomeExpenseLineGraph = () => {
  return <div class="linegraph">
    <Line
     data = {{
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
        label: 'Income',
        data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55],
        fill: false,
        tension: 0.1,
        backgroundColor: '#00887A',
        borderColor: '#00887A',
      },
      {
        label: 'Expenses',
        data: [61, 90, 70, 51, 66, 45, 50, 69, 70, 71, 66, 75],
        backgroundColor: '#FFCCBC',
        borderColor: '#FFCCBC'
      }
    ]
    }}
    />
  </div>
}

export default IncomeExpenseLineGraph;