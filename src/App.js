import React, { useState } from 'react';

import NetWorthPie from './components/NetWorthPie';
import TransactionPie from './components/TransactionPie';

import './styles/app.css'


function App() {
  const [active, setActive] = useState("overview")
  return (
    <div className="App">
      <nav>
        <button onClick = {() => setActive("overview")}>Overview</button>
        <button onClick = {() => setActive("transaction")}>Transactions</button>
      </nav>
      <div>
        {active === "overview" && <NetWorthPie />}
        {active === "transaction" && <TransactionPie />}
      </div>
    </div>
  );
}

export default App;
