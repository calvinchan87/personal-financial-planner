import React from 'react';
import { Line } from 'react-chartjs-2'

import { dates, foodSpending, shelterSpending, householdSpending } from '../../helpers/spendingLineGraphs/allSpending'

const ShelterSpending = () => {
  return <div class="linegraph">
    <Line
     data = {{
      labels: dates(),
      datasets: [
        {
        label: 'shelter',
        data: shelterSpending(),
        fill: false,
        tension: 0.1,
        backgroundColor: '#FFCCBC',
        borderColor: '#FFCCBC',
      },
    ],
  }}
  options={{ 
    maintainAspectRatio: true
   }}
    />
  </div>
}

export default ShelterSpending;