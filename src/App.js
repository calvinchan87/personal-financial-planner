import React, { useState } from 'react';

import AcctSummaryTable from './components/AcctSummaryTable'
import GroupedBar from './components/monthlySpendBarChart'
import GroupedBar2 from './components/govCompareChart'
import SaveFlipCard from './components/saveflipcard'
import LiquidFlipCard from './components/liquidflipcard'
import EmergencyFlipCard from './components/emergencyflipcard'

import IncomeExpenseLineGraph from './components/IncomeExpenseLineGraph';
import NetWorthPie from './components/NetWorthPie';
import TransactionPage from './components/TransactionPage';
import Badge from './components/Badge'

import './styles/app.css'
import './styles/navButton.css'
import './styles/flipcard.css'

function App() {
  const [active, setActive] = useState("overview")

  console.log(active)

  return (
    <div className="App">
      <nav className="nav-bar">
        <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ViHzG7hGs1CgyVlicBVPuIeyUMYaEGtJsBlGQiZcMdQ6J0abaSywP1MDPzp8RjZDRA" alt="logo" onClick = {() => setActive("overview")}/>
        <button class={active === "overview" ? "nav-button active" : "nav-button"} onClick = {() => setActive("overview")}>Overview</button>
        <button class={active === "transaction" ? "nav-button active" : "nav-button"} onClick = {() => setActive("transaction")}>Transactions</button>
        <button class={active === "insight" ? "nav-button active" : "nav-button"} onClick = {() => setActive("insight")}>Insights</button>
        <button class={active === "achievements" ? "nav-button active" : "nav-button"} onClick = {() => setActive("achievements")}>Achievements</button>
      </nav>
      <br></br>
      <br></br>
      <div>
        {active === "overview" && <AcctSummaryTable />}
        {active === "overview" && <IncomeExpenseLineGraph />}
        {active === "overview" && <NetWorthPie />}
        {active === "transaction" && <TransactionPage />}
        {active === "achievements" && <Badge />}
      </div>  
      <div class="insightchart">
        {active === "insight" && <GroupedBar/>}
        {active === "insight" && <GroupedBar2/>}
      </div>
      <div class="flipcard">
        {active === "insight" && <SaveFlipCard/>}
        {active === "insight" && <LiquidFlipCard/>}
        {active === "insight" && <EmergencyFlipCard/>}
      </div>
    </div>
  );
}

export default App;
