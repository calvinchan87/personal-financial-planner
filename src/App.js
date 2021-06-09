import React, { useState } from 'react';

import AcctSummaryTable from './components/AcctSummaryTable'
import GroupedBar from './components/monthlySpendBarChart'
import GroupedBar2 from './components/govCompareChart'
import FlipCard from './components/flipcard'

import './styles/navButton.css'

function App() {
  const [active, setActive] = useState("overview")
  return (
    <div className="App">
      <nav className="nav-bar">
        <button class="nav-button" onClick = {() => setActive("overview")}>Overview</button>
        <button class="nav-button" onClick = {() => setActive("transaction")}>Transactions</button>
        <button class="nav-button" onClick = {() => setActive("insight")}>Insights</button>
      </nav>
      <div>
        {active === "overview" && <AcctSummaryTable />}
        {active === "transaction"}
        {active === "insight" && <GroupedBar />}
        {active === "insight" && <GroupedBar2/>}
        {active === "insight" && <FlipCard/>}
      </div>
    </div>
  );
}

export default App;
