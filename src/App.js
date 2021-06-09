import React, { useState } from 'react';

import AcctSummaryTable from './components/AcctSummaryTable'
import GroupedBar from './components/monthlySpendBarChart'
import GroupedBar2 from './components/govCompareChart'
import FlipCard from './components/flipcard'

import IncomeExpenseLineGraph from './components/IncomeExpenseLineGraph';
import NetWorthPie from './components/NetWorthPie';
import TransactionPage from './components/TransactionPage';
import Badge from './components/Badge'

import './styles/app.css'
import './styles/navButton.css'


function App() {
  const [active, setActive] = useState("overview")
  return (
    <div className="App">
      <nav className="nav-bar">
        <button class="nav-button" onClick = {() => setActive("overview")}>Overview</button>
        <button class="nav-button" onClick = {() => setActive("transaction")}>Transactions</button>
        <button class="nav-button" onClick = {() => setActive("insight")}>Insights</button>
        <button class="nav-button" onClick = {() => setActive("achievement")}>Achievements</button>
      </nav>
      <div>
        {active === "overview" && <AcctSummaryTable />}
        {active === "overview" && <IncomeExpenseLineGraph />}
        {active === "overview" && <NetWorthPie />}
        {active === "transaction" && <TransactionPage />}
        {active === "insight" && <GroupedBar />}
        {active === "insight" && <GroupedBar2/>}
        {active === "insight" && <FlipCard/>}
        {active === "achievement" && <Badge/>}
      </div>  
    </div>
  );
}

export default App;
