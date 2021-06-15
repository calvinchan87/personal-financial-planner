import { useEffect, useState } from "react";

// const netWortObj = [
//  {id:2,accont_name:"checking",description:"joint checking account",balance:3245.65},
//   {id:1,account_name:"checking",description:"checking account",balance:10365.00},
//   {id:4,account_name:"savings",description:"savings account",balance:15100.00},
//   {id:3,account_name:"credit card",description:"credit card ",balance:-2056.50},
//   {id:6,account_name:"investments",description:"tfsa",balance:10000.00},
//   {id:5,account_name:"investments",description:"direct investing",balance:55096.00},
//   {id:7,account_name:"loans",description:"student loan",balance:-15000.00}
// ];


export default function useNetWorthData() {
  const [networth, setNetworth] = useState([]);

  const getNetworth = async () => {
    try {
      const response = await fetch('http://localhost:5000/overview')
      const jsonData = await response.json();

      setNetworth(jsonData)
    } catch (err) {
      console.log(err.message)
    }
  }


function netWorth() {
  const assetsArray = networth.filter(function(el) {
    return el.account_name === "checking" 
    || el.account_name === "savings" || el.account_name === "investments"
  })
  const debtArray = networth.filter(function(el) {
    return el.account_name === "credit card" 
    || el.account_name === "loans"
  })
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  let sumOfAssets = 0;
  for(let x = 0; x <assetsArray.length; x++) {
    sumOfAssets += parseInt(assetsArray[x].balance)
  }
  let sumOfDebt = 0;
  for(let x = 0; x <debtArray.length; x++) {
    sumOfDebt += parseInt(debtArray[x].balance)
  }
  return formatter.format(sumOfAssets - sumOfDebt);
}

function assetsDebt() {
  const assetsArray = networth.filter(function(el) {
    return el.account_name === "checking" 
    || el.account_name === "savings" || el.account_name === "investments"
  })
  const debtArray = networth.filter(function(el) {
    return el.account_name === "credit card" 
    || el.account_name === "loans"
  })
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  let sumOfAssets = 0;
  for(let x = 0; x <assetsArray.length; x++) {
    sumOfAssets += Number(assetsArray[x].balance.replace(/[^0-9\.-]+/g,""));
  }
  let sumOfDebt = 0;
  for(let x = 0; x <debtArray.length; x++) {
    sumOfDebt += Number(debtArray[x].balance.replace(/[^0-9\.-]+/g,""));

  }
  const newArray = []
  newArray.push(sumOfAssets, sumOfDebt)
  return newArray;
}

useEffect(() => {
  getNetworth();
}, []);

return {networth, netWorth, assetsDebt};


}