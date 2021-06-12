import { useEffect, useState } from "react";

// const transactionObj = [
//   { 
//     id: 1,
//     date: 'April 1, 2021',
//     description: "Rent",
//     category: "shelter",
//     amount: 1800
//   },
//   { 
//     id: 1,
//     date: 'April 2, 2021',
//     description: "Gas",
//     category: "transportation",
//     amount: 50
//   },
//   { 
//     id: 1,
//     date: 'May 3, 2021',
//     description: "Safeway",
//     category: "food",
//     amount: 150
//   },
//   { 
//     id: 1,
//     date: 'May 4, 2021',
//     description: "Whole Foods",
//     category: "household",
//     amount: 175
//   },
//   { 
//     id: 1,
//     date: 'June 5, 2021',
//     description: "Superstore",
//     category: "food",
//     amount: 87
//   },
//   { 
//     id: 1,
//     date: 'June 6, 2021',
//     description: "Bed Bath & Beyond",
//     category: "household",
//     amount: 345
//   },
//   { 
//     id: 1,
//     date: 'June 4, 2021',
//     description: "Utilities",
//     category: "shelter",
//     amount: 75
//   },
//   { 
//     id: 1,
//     date: 'June 1, 2021',
//     description: "Whole Foods",
//     category: "food",
//     amount: 44
//   },
//   { 
//     id: 1,
//     date: 'June 1, 2020',
//     description: "Gas",
//     category: "transportation",
//     amount: 60
//   },
//   { 
//     id: 1,
//     date: 'June 2, 2020',
//     description: "Costco",
//     category: "food",
//     amount: 235
//   },
//   { 
//     id: 1,
//     date: 'June 3, 2020',
//     description: "Whole Foods",
//     category: "food",
//     amount: 57
//   },
// ]

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
        totalsums[singleTransaction.category] += parseInt(singleTransaction.amount)
        
        // console.log("single transactions category", singleTransaction.category)
        // console.log("singleTransaction amount", singleTransaction.amount)
        // console.log("totalsums blah blah blah", totalsums[singleTransaction.category])
        // console.log('singletransaction', singleTransaction)

      } else {
        totalsums[singleTransaction.category] = parseInt(singleTransaction.amount)
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


// export function getCategoryAndAmountSummary(array) {
//   let totalsums = {};
//   for (let x = 0; x < array.length; x++) {
//     let singleTransaction = array[x]
//     if (singleTransaction.category in totalsums) {
//       totalsums[singleTransaction.category] += singleTransaction.amount
//     } else {
//       totalsums[singleTransaction.category] = singleTransaction.amount
//     }
//   }
//   let categories = [];
//   let amounts = [];
  
//   for (let key of Object.keys(totalsums)) {
//     categories.push(key)
//     amounts.push(totalsums[key])
//   }
//   return {categories, amounts};
// }


// export function Rows() {
//   let tranArray = [];
//   for(const obj of transactionObj) {
//     tranArray.push(obj)
//   }
//   return tranArray;
// };

// export function Categories() {
//   let categoryArray = [];
//   for(const obj of transactionObj) {
//     if(!categoryArray.includes(obj.category)) {
//       categoryArray.push(obj.category)
//     }
//   }
//   return categoryArray;
// };

// export function Filter(obj, filterString) {
//   if(filterString.includes(" ")) {
//     const strings = filterString.split(" ")
//     let filteredObjects = obj;
//     for(const filter of strings) {
//       filteredObjects = filteredObjects.filter((e) => e.date.toLowerCase().includes(filter.toLowerCase()))
//     }
//     return filteredObjects;
//   }
//   return obj.filter(function(e) {
//     return e.date.toLowerCase().includes(filterString.toLowerCase())
//   })
// };