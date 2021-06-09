import React, { useState } from 'react';

import AllSpending from './AllSpending';
import FoodSpending from './FoodSpending';
import ShelterSpending from './ShelterSpending';
import HouseholdSpending from './HouseholdSpending';

import '../../styles/navButton.css'

const SpendingLineGraph = () => {
  const [active, setActive] = useState("all")
  return <div>
    <button class="nav-button" onClick = {() => setActive("all")}>all</button>
    <button class="nav-button" onClick = {() => setActive("food")}>food</button>
    <button class="nav-button" onClick = {() => setActive("shelter")}>shelter</button>
    <button class="nav-button" onClick = {() => setActive("household")}>household</button>
    <div>
      {active === "all" && <AllSpending />}
      {active === "food" && <FoodSpending />}
      {active === "shelter" && <ShelterSpending />}
      {active === "household" && <HouseholdSpending />}
    </div>
  </div>
}

export default SpendingLineGraph;