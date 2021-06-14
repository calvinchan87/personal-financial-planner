import { useEffect, useState } from "react";



export default function useOverviewData() {
  const [overview, setOverview] = useState([]);

  const getOverview = async () => {
    try {
      const response = await fetch('http://localhost:5000/overview')
      const jsonData = await response.json();

      setOverview(jsonData)
    } catch (err) {
      console.log(err.message)
    }
  }

  function Rows() {
    let acctArray = [];
    for(const obj of overview) {
      acctArray.push(obj)
    }
    return acctArray;
  };
  
  function cashSum() {
    const newArray = overview.filter(function(el) {
      return el.account_name === "checking" 
      || el.account_name === "savings"
    })
    console.log(newArray)
    let sumOfCash = 0;
    for(let x = 0; x < newArray.length; x++) {
      sumOfCash += parseInt(newArray[x].balance);
    }
    return sumOfCash.toFixed(2);
  };
  
  function creditCardSum() {
    const newArray = overview.filter(function(el) {
      return el.account_name === "credit card" 
    })
    console.log(newArray)
    let sumOfCreditCards = 0;
    for(let x = 0; x < newArray.length; x++) {
      sumOfCreditCards += parseInt(newArray[x].balance);
    }
    return sumOfCreditCards.toFixed(2);
  }
  
  function investmentsSum() {
    const newArray = overview.filter(function(el) {
      return el.account_name === "investments" 
    })
    console.log(newArray)
    let sumOfInvestments = 0;
    for(let x = 0; x < newArray.length; x++) {
      sumOfInvestments += parseInt(newArray[x].balance);
    }
    return sumOfInvestments.toFixed(2);
  }
  
  function loanSum() {
    const newArray = overview.filter(function(el) {
      return el.account_name === "loans" 
    })
    console.log(newArray)
    let sumOfLoans = 0;
    for(let x = 0; x < newArray.length; x++) {
      sumOfLoans += parseInt(newArray[x].balance);
    }
    return sumOfLoans.toFixed(2);
  }
  
  function cashArray() {
    const newArray = overview.filter(function(el) {
      return el.account_name === "checking" || el.account_name === "savings"
    })
    return newArray;
  }
  
  function creditCardArray() {
    const newArray = overview.filter(function(el) {
      return el.account_name === "credit card"
    })
    return newArray;
  }
  
  function investmentArray() {
    const newArray = overview.filter(function(el) {
      return el.account_name === "investments"
    })
    return newArray;
  }
  
  function loansArray() {
    const newArray = overview.filter(function(el) {
      return el.account_name === "loans"
    })
    return newArray;
  }

  useEffect(() => {
    getOverview();
  }, []);

  return {overview, setOverview, Rows, cashSum, creditCardSum, investmentsSum, loanSum, cashArray, creditCardArray, investmentArray, loansArray};
}








// const accountsObj = [
//   { 
//     id: 1,
//     account_name: "checking",
//     description: "checking account",
//     balance: 10365.00
//   },
//   { 
//     id: 2,
//     account_name: "credit card",
//     description: "rbc credit card",
//     balance: -2000
//   },
//   { 
//     id: 3,
//     account_name: "savings",
//     description: "checking account",
//     balance: 10000
//   },
//   { 
//     id: 3,
//     account_name: "investments",
//     description: "direct inv",
//     balance: 12000
//   },
//   { 
//     id: 3,
//     account_name: "loans",
//     description: "student loan",
//     balance: -23000
//   },
// ]