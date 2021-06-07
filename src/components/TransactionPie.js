import React from 'react';
import { Pie } from 'react-chartjs-2'

import '../styles/transactionsPie.css'

const TransactionPie = () => {
    return <div class = 'transactionpie'>
    <Pie
     data = {{
        labels: [
          'food',
          'shelter',
          'household',
          'clothing & footwear',
          'transportation',
          'health & personal care',
          'recreation, education and reading',
          'alcoholic beverages & tobacco'
      ],
      datasets: [{
        data: [10, 20, 30, 40, 70, 5, 35, 20],
        backgroundColor: ['#00887A', '#FFCCBC', '#D3E3FC', '#77A6F7']
    }],
      }}

    />
  </div>
}

export default TransactionPie;