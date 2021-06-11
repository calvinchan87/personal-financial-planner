
import React from 'react';
import { Pie } from 'react-chartjs-2'

import {getCategoryAndAmountSummary} from '../helpers/transactionsPie'

import '../styles/transactionsPie.css'

const TransactionPie = (props) => {
  const categoryAndAmounts = getCategoryAndAmountSummary(props.filteredRows)
  return <div class = 'transactionpie'>
    <Pie
     data = {{
       labels: categoryAndAmounts.categories,
       datasets: [{
         data: categoryAndAmounts.amounts,
         backgroundColor: ['#00887A', '#FFCCBC', '#D3E3FC', '#77A6F7'],
        }],
      }}
      options = {{
        plugins: {
          title: {
            display: true,
            text: 'Spending by Category'
          },
          legend: {
            display: false
          }
        }
      }}
      />
  </div>
}

export default TransactionPie;

// props.filteredRows.map((row) => {
//   return row.amount;  
// }),