import React, { useState } from 'react';

import IncomeExpenseLineGraph from './components/IncomeExpenseLineGraph';
import NetWorthPie from './components/netWorthPie';
import TransactionPage from './components/TransactionPage';

import './styles/app.css'
import './styles/navButton.css'


function App() {
  const [active, setActive] = useState("overview")
  return (
    <div className="App">
      <nav class="nav-bar">
        <button class="nav-button" onClick = {() => setActive("overview")}>Overview</button>
        <button class="nav-button" onClick = {() => setActive("transaction")}>Transactions</button>
      </nav>
      <div>
        {active === "overview" && <IncomeExpenseLineGraph />}
        {active === "overview" && <NetWorthPie />}
        {active === "transaction" && <TransactionPage />}
      </div>
    </div>
  );
}

export default App;
