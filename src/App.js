import React, { useState } from 'react';

import AcctSummaryTable from './components/AcctSummaryTable'


function App() {
  const [active, setActive] = useState("overview")
  return (
    <div className="App">
      <nav className="nav-bar">
        <button class="nav-button" onClick = {() => setActive("overview")}>Overview</button>
        <button class="nav-button" onClick = {() => setActive("transaction")}>Transactions</button>
      </nav>
      <div>
        {active === "overview" && <AcctSummaryTable />}
        {active === "transaction"}
      </div>
    </div>
  );
}

export default App;
