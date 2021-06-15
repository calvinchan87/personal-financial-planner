
import React from 'react';
import { Pie } from 'react-chartjs-2'

import useTransactionData from '../helpers/transactionsPie';

import '../styles/transactionsPage.css'

const TransactionPie = (props) => {

  const {
    transactions,
    getCategoryAndAmountSummary,
    Rows,
    Categories,
    Filter
  } = useTransactionData();

  const categoryAndAmounts = getCategoryAndAmountSummary(props.filteredRows)

  return <div class = 'transaction-pie'>
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