import React, { useState } from 'react';
import TransactionPie from './TransactionPie';
import SpendingLineGraph from './SpendingComponents/SpendingLineGraph';
import ListTransactions from './TransactionsTable';
import Input from './inputField';
import { Rows, Filter } from '../helpers/transactionsPie';

import '../styles/navButton.css'

const rows = Rows();


const TransactionPage = () => {
  const [active, setActive] = useState("categories-only")
  const [filter, setFilter] = useState("");
  const filteredRows = Filter(rows, filter);
  console.log("filtered rows------>", filteredRows)
    return (
      <section>
        <div>
          <button class="nav-button" onClick={() => setActive("categories-only")}>Categories</button>
          <button class="nav-button" onClick={() => setActive("spending-line-graph-only")}>Spending Graph</button>
        </div>
          {active === "categories-only" && <Input setFilter={setFilter} />}
          {active === "categories-only" && <TransactionPie filteredRows={filteredRows}/>}
          {active === "categories-only" && <ListTransactions filteredRows={filteredRows}/>}
          {active === "spending-line-graph-only" &&<SpendingLineGraph />}
          {active === "spending-line-graph-only" &&<ListTransactions filteredRows={filteredRows}/>}
      </section>
    )
  
   

}

export default TransactionPage;