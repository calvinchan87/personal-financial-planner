import React from 'react';
import { Pie } from 'react-chartjs-2'
import useNetWorthData from '../helpers/netWorth'

import '../styles/overview.css'

const NetWorthPie = () => {

  const {
    networth,
    netWorth,
    assetsDebt
  } = useNetWorthData();

    return <div class = 'networthpie'>
    <Pie
     data = {{
        labels: [
          'Assets',
          'Debt',
      ],
      datasets: [{
        data: assetsDebt(),
        backgroundColor: ['#77A6F7', '#FFCCBC']
    }],
      }}
      options = {{
        plugins: {
            title: {
                display: true,
                text: `Net Worth = ${netWorth()}`,
                padding: 20,
                font: { size: 30 }
            },
            legend: {
              display: false
            }
        }
    }}
    />
  </div>
}

export default NetWorthPie;