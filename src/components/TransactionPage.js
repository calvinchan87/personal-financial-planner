import React, { useState } from 'react';
import TransactionPie from './TransactionPie';
import SpendingLineGraph from './SpendingComponents/SpendingLineGraph';
import BasicTable from './TransactionsTable';
import Input from './inputField';

import '../styles/navButton.css'

const TransactionPage = () => {
  const [active, setActive] = useState("categories-only")
    return (
      <section>
        <div>
          <button class="nav-button" onClick={() => setActive("categories-only")}>Categories</button>
          <button class="nav-button" onClick={() => setActive("spending-line-graph-only")}>Spending Graph</button>
        </div>
          {active === "categories-only" && <Input />}
          {active === "categories-only" && <TransactionPie />}
          {active === "categories-only" && <BasicTable />}
          {active === "spending-line-graph-only" &&<SpendingLineGraph />}
          {active === "spending-line-graph-only" &&<BasicTable />}
      </section>
    )
  
   

}

export default TransactionPage;