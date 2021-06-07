import React from 'react';
import { Pie } from 'react-chartjs-2'

const TransactionPie = () => {
    return <div>
    <Pie
     data = {{
        labels: [
          'Red',
          'Yellow',
          'Blue'
      ],
      datasets: [{
        data: [10, 20, 30]
    }],
      }}

    />
  </div>
}

export default TransactionPie;