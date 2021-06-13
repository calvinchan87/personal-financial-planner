import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'

import '../../src/styles/lineGraph.css'

const IncomeExpenseLineGraph = () => {

  const [sums, setSums] = useState([]);

  const getSums = async () => {
    try {

      const response = await fetch("http://localhost:5000/sums")
      const jsonData = await response.json()
      
      setSums(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  };

  useEffect(() => {
    getSums();
  }, []);

  
const dateArray = () => {
   let date = [];
   for(const data of sums) {
     date.push(data.date);
   }
   return date
 };
 
const incomeArray = () => {
   let inc = [];
   for(const data of sums) {
     inc.push(data.income);
   }
   return inc
 };
 
const expensesArray = () => {
   let exp = [];
   for(const data of sums) {
     exp.push(data.expense)
   }
   return exp
 };
  return <div class="linegraph">
    <h1 className="title" >Income Expense Graph</h1>
    <Line
     data = {{
      labels: dateArray(),
      datasets: [
        {
        label: 'Income ($)',
        data: incomeArray(),
        fill: false,
        tension: 0.1,
        backgroundColor: '#00887A',
        borderColor: '#00887A',
      },
      {
        label: 'Expenses ($)',
        data: expensesArray(),
        backgroundColor: '#FFCCBC',
        borderColor: '#FFCCBC'
      },
    ],
  }}
  options={{ 
    maintainAspectRatio: true, 
   }}
    />
  </div>
}

export default IncomeExpenseLineGraph;