import React, { useState } from 'react';

import AcctSummaryTable from './components/AcctSummaryTable'
import GovCompareChart from './components/govCompareChart'
import SaveFlipCard from './components/saveflipcard'
import LiquidFlipCard from './components/liquidflipcard'
import EmergencyFlipCard from './components/emergencyflipcard'
import AddAccount from './components/AddAccount';


import IncomeExpenseLineGraph from './components/IncomeExpenseLineGraph';
import NetWorthPie from './components/NetWorthPie';
import TransactionPage from './components/TransactionPage';
import Badge from './components/Badge'


import './styles/app.css'
import './styles/navButton.css'
import './styles/insightspage.css'
import './styles/flipcard.css'
import logo from './PFP.png'

function App() {
  const [active, setActive] = useState("overview")

  return (
    <div className="App">
      <nav className="nav-bar">
        <img className="img-responsive" src={logo} alt="logo" onClick={() => setActive("overview")} />
        <button class={active === "overview" ? "nav-button active" : "nav-button"} onClick={() => setActive("overview")}>Overview</button>
        <button class={active === "transaction" ? "nav-button active" : "nav-button"} onClick={() => setActive("transaction")}>Transactions</button>
        <button class={active === "insight" ? "nav-button active" : "nav-button"} onClick={() => setActive("insight")}>Insights</button>
        <button class={active === "achievements" ? "nav-button active" : "nav-button"} onClick={() => setActive("achievements")}>Achievements</button>
      </nav>
      <br></br>
      <br></br>
      <div>
        <div className="overviewpage">
          <div>
          {active === "overview" && <AddAccount />}
          <br></br>
          {active === "overview" && <AcctSummaryTable />}
          </div>
          {active === "overview" && <NetWorthPie />}
        </div>
        {active === "transaction" && <TransactionPage />}
        {active === "achievements" && <Badge />}
      </div>
      <div class="insightchart">
        {active === "insight" && <IncomeExpenseLineGraph />}
        {active === "insight" && <GovCompareChart />}
      </div>
      <div class="flipcard">
        {active === "insight" && <SaveFlipCard />}
        {active === "insight" && <LiquidFlipCard />}
        {active === "insight" && <EmergencyFlipCard />}
      </div>
      <div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
