import React from 'react';
import { Pie } from 'react-chartjs-2'

import { Categories, Amounts } from '../helpers/transactionsPie'

import '../styles/transactionsPie.css'

const TransactionPie = (props) => {
    return <div class = 'transactionpie'>
    <Pie
     data = {{
        labels: Categories(),
      datasets: [{
        data: props.filteredRows.map((row) => {
          return row.amount;  
        }),
        backgroundColor: ['#00887A', '#FFCCBC', '#D3E3FC', '#77A6F7']
    }],
      }}
    />
  </div>
}

export default TransactionPie;