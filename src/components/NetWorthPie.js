import React from 'react';
import { Pie } from 'react-chartjs-2'

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

    />
  </div>
}

export default NetWorthPie;