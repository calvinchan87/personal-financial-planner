import React, { useState } from 'react';
import TransactionPie from './TransactionPie';
import BasicTable from './TransactionsTable';
import Input from './inputField';

import useTransactionData from '../helpers/transactionsPie';

import '../styles/navButton.css'


const TransactionPage = () => {
  
  const {
    transactions,
    getCategoryAndAmountSummary,
    Rows,
    Categories,
    Filter
  } = useTransactionData();
  
  const rows = Rows();

  // const [active, setActive] = useState("categories-only")
  const [filter, setFilter] = useState("");
  const filteredRows = Filter(rows, filter);
  console.log("filtered rows------>", filteredRows)
    return (
      <section>
        <div className="transactions-page">
        <Input setFilter={setFilter} />
        <TransactionPie filteredRows={filteredRows}/>
        <BasicTable filteredRows={filteredRows}/>
        </div>
          
      </section>
    )
  
   

}

export default TransactionPage;