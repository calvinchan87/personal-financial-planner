import { useEffect, useState } from "react";

export default function useTransactionData() {
  const [transactions, setTransactions] = useState([]);
  
  const getTransactions = async () => {
    try {
      const response = await fetch('http://localhost:5000/transactions')
      const jsonData = await response.json();
      
      setTransactions(jsonData)
    } catch (err) {
      console.error(err.message);
    }
  }

  function getCategoryAndAmountSummary(transactions) { 
    let totalsums = {};
    console.log("totalsums", totalsums)
    for (let x = 0; x < transactions.length; x++) {
      let singleTransaction = transactions[x]
      if (singleTransaction.category in totalsums) {
        totalsums[singleTransaction.category] += Number(singleTransaction.amount.replace(/[^0-9\.-]+/g,""));

      } else {
        totalsums[singleTransaction.category] = Number(singleTransaction.amount.replace(/[^0-9\.-]+/g,""));
      }
    }
    let categories = [];
    let amounts = [];
    
    for (let key of Object.keys(totalsums)) {
      categories.push(key)
      amounts.push(totalsums[key])
    }
    // console.log("totalsums2", totalsums)
    return {categories, amounts};
  }
  
  function Rows() {
    let tranArray = [];
    for(const obj of transactions) {
      tranArray.push(obj)
    }
    return tranArray;
  };
  
  function Categories() {
    let categoryArray = [];
    for(const obj of transactions) {
      if(!categoryArray.includes(obj.category)) {
        categoryArray.push(obj.category)
      }
    }
    return categoryArray;
  };
  
  function Filter(obj, filterString) {
    if(filterString.includes(" ")) {
      const strings = filterString.split(" ")
      let filteredObjects = obj;
      for(const filter of strings) {
        filteredObjects = filteredObjects.filter((e) => e.date.toLowerCase().includes(filter.toLowerCase()))
      }
      return filteredObjects;
    }
    return obj.filter(function(e) {
      return e.date.toLowerCase().includes(filterString.toLowerCase())
    })
  };
  
  useEffect(() => {
    getTransactions();
  }, []);
  
  return {transactions, getCategoryAndAmountSummary, Rows, Categories, Filter };
}

