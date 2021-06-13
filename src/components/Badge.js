import { React } from 'react';
import { Alert, Tooltip } from 'antd';
import useTransactionData from '../helpers/badgeHelper';

import 'antd/dist/antd.css';
import '../styles/badge.css';

const Badge = () => {

  const { transactions } = useTransactionData();
  console.log("User transactions loading: ", transactions)

  function Grocery(props) {

    // const dataLength = props.data.length;
    // const isEarned = dataLength > 613 ? true : false;

    let currentMonthExp = 0;
    let lastMonthExp = 0;
    for (let transaction of props.data) {
      if (transaction.date === "Jun-21") {
        currentMonthExp += parseInt(transaction.amount);
      }
      if (transaction.date === "May-21") {
        lastMonthExp += parseInt(transaction.amount);
      }
    }
    console.log("Current month expenses: ", currentMonthExp)
    console.log("Last month expenses: ", lastMonthExp)

    const isEarned = currentMonthExp < lastMonthExp ? true : false;

    return <Alert style={{background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.7)), url("https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`}}
                  message="Grocery Guru" type={isEarned ? "success" : "error"} showIcon />
  }
  
  function Saver(props) {
    const isEarned = props.isEarned;
    return <Alert style={{background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.7)), url("https://images.unsplash.com/photo-1512075135822-67cdd9dd7314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`}}
                  message="Super Saver" type={isEarned ? "success" : "error"} showIcon />
  }
  
  function Debt(props) {
    const isEarned = props.isEarned;
    return <Alert style={{background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.6)), url("https://images.unsplash.com/photo-1554475025-787dd4309d6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`}}
                  message="Debt Destroyer" type={isEarned ? "success" : "error"} showIcon />
  }
  
  function Energy(props) {
    const isEarned = props.isEarned;
    return <Alert style={{background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.6)), url("https://images.unsplash.com/photo-1579417195379-5f6916d883a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`}}
                  message="Energy Efficient" type={isEarned ? "success" : "error"} showIcon />
  }

  return (
    <>
      <br></br>
      <h2 class="section">Achievements earned since your last visit</h2>
      <div class="container">
        <div class="container-ind">
           <Tooltip title="Spent less than the average Canadian (as a proportion of total income) in each of the last 3 months" placement="bottomLeft">
             <span>
               <Saver isEarned={true} data={transactions}/>
             </span>
           </Tooltip>
         </div>
      </div>
      <br></br>
      <h2 class="section">All Achievements</h2>
      <div class="container">
        <div class="container-ind">
           <Tooltip title="Congratulations, you've saved at least 10% of your income every month in the past year!" placement="bottomLeft">
             <span>
               <Saver isEarned={true} data={transactions}/>
             </span>
           </Tooltip>
         </div>
         <br></br>
         <div class="container-ind">
           <Tooltip title="Unlock this achievement by lowering your total debt each month for the next 3 months." placement="bottomLeft">
             <span>
               <Debt isEarned={false} data={transactions}/>
             </span>
           </Tooltip>
         </div>
         <div class="container-ind">
           <Tooltip title="Spent less than the average Canadian (as a proportion of total income) last month" placement="bottomLeft">
             <span>
               <Grocery isEarned={true} data={transactions}/>
             </span>
           </Tooltip>
         </div>
         <br></br>
         <div class="container-ind">
           <Tooltip title="Unlock this achievement by spending less than 5% of your total income on electricity and natural gas bills over the last 12 months." placement="bottomLeft">
             <span>
               <Energy isEarned={false} data={transactions}/>
             </span>
           </Tooltip>
         </div>
      </div>
    </>
  );

}

export default Badge;