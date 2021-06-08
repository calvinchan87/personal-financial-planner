import React from 'react';
import { Pie } from 'react-chartjs-2'
import { netWorth } from '../helpers/netWorth'

import '../styles/transactionsPie.css'

const NetWorthPie = () => {
    return <div class = 'transactionpie'>
    <Pie
     data = {{
        labels: [
          'Assets',
          'Debt',
      ],
      datasets: [{
        data: [60, 20],
        backgroundColor: ['#77A6F7', '#FFCCBC']
    }],
      }}
      options = {{
        plugins: {
            title: {
                display: true,
                text: `networth = ${netWorth()}`
            }
        }
    }}
    />
  </div>
}

export default NetWorthPie;