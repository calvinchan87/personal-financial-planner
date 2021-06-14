import { useEffect, useState } from "react";

export default function useTransactionData() {
  const [transactions, setTransactions] = useState([]);
  
  const getTransactions = async () => {
    try {
      const response = await fetch('http://localhost:5000/badges')
      const jsonData = await response.json();
      
      setTransactions(jsonData)
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTransactions();
  }, []);
  
  return { transactions };
}