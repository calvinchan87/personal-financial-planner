import React from 'react';
import { Line } from 'react-chartjs-2'

import { dates, foodSpending, shelterSpending, householdSpending } from '../../helpers/spendingLineGraphs/allSpending'

const HouseholdSpending = () => {
  return <div class="linegraph">
    <Line
     data = {{
      labels: dates(),
      datasets: [
        {
        label: 'household',
        data: householdSpending(),
        fill: false,
        tension: 0.1,
        backgroundColor: '#77A6F7',
        borderColor: '#77A6F7',
      },
    ],
  }}
  options={{ 
    maintainAspectRatio: true
   }}
    />
  </div>
}

export default HouseholdSpending;