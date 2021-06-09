import React from 'react';
import { Line } from 'react-chartjs-2'

import { dates, foodSpending, shelterSpending, householdSpending } from '../../helpers/spendingLineGraphs/allSpending'

const AllSpending = () => {
  return <div class="linegraph">
    <Line
     data = {{
      labels: dates(),
      datasets: [
        {
        label: 'food',
        data: foodSpending(),
        fill: false,
        tension: 0.1,
        backgroundColor: '#00887A',
        borderColor: '#00887A',
      },
      {
        label: 'shelter',
        data: shelterSpending(),
        backgroundColor: '#FFCCBC',
        borderColor: '#FFCCBC'
      },
      {
        label: 'household',
        data: householdSpending(),
        backgroundColor: '#77A6F7',
        borderColor: '#77A6F7'
      }
    ],
  }}
  options={{ 
    maintainAspectRatio: true
   }}
    />
  </div>
}

export default AllSpending