import { React } from 'react';
import { Alert, Tooltip } from 'antd';
import useTransactionData from '../helpers/badgeHelper';

import 'antd/dist/antd.css';
import '../styles/badge.css';

const Badge = () => {

  const { transactions } = useTransactionData();
  console.log("User transactions loading: ", transactions)

  function Saver(props) {
    const isEarned = props.isEarned;
    const isClosable = props.isClosable;
    return <Alert style={isEarned ? {background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.7)), url("https://images.unsplash.com/photo-1512075135822-67cdd9dd7314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`} : {background: "mauve"}}
                  message="Super Saver" description={isEarned ? "Earned Jun-21" : "Achievement not unlocked"} type={isEarned ? "success" : "error"} showIcon closable={isClosable ? true : false} />
  }
  
  function Debt(props) {
    const isEarned = props.isEarned;
    return <Alert style={isEarned ? {background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.6)), url("https://images.unsplash.com/photo-1554475025-787dd4309d6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`} : {background: "mauve"}}
                  message="Debt Destroyer" description={isEarned ? "Earned Jun-21" : "Achievement not unlocked"} type={isEarned ? "success" : "error"} showIcon />
  }

  function Grocery(props) {

    // // real functionality && logic would work like this
    // let currentMonthFoodExp = 0;
    // let lastMonthFoodExp = 0;
    // for (let t of props.data) {
    //   if (t.date === "Jun-21" && t.category === "food") {
    //     currentMonthFoodExp += parseInt(t.amount);
    //   }
    //   if (t.date === "May-21" && t.category === "food") {
    //     lastMonthFoodExp += parseInt(t.amount);
    //   }
    // }
    // console.log("Current month food expenses: ", currentMonthFoodExp)
    // console.log("Last month food expenses: ", lastMonthFoodExp)

    // const isEarned = currentMonthFoodExp < lastMonthFoodExp ? true : false;

    const isEarned = props.isEarned;
    return <Alert style={isEarned ? {background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.7)), url("https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`} : {background: "mauve"}}
                  message="Grocery Guru" description={isEarned ? "Earned Jun-21" : "Achievement not unlocked"} type={isEarned ? "success" : "error"} showIcon />
  }
  
  function Energy(props) {
    const isEarned = props.isEarned;
    return <Alert style={isEarned ? {background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.6)), url("https://images.unsplash.com/photo-1579417195379-5f6916d883a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`} : {background: "mauve"}}
                  message="Energy Efficient" description={isEarned ? "Earned Jun-21" : "Achievement not unlocked"} type={isEarned ? "success" : "error"} showIcon />
  }

  function Foodie(props) {
    const isEarned = props.isEarned;
    return <Alert style={isEarned ? {background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.6)), url("https://images.unsplash.com/photo-1579417195379-5f6916d883a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`} : {background: "mauve"}}
                  message="Frugal Foodie" description={isEarned ? "Earned Jun-21" : "Achievement not unlocked"} type={isEarned ? "success" : "error"} showIcon />
  }

  function Transport(props) {
    const isEarned = props.isEarned;
    return <Alert style={isEarned ? {background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.6)), url("https://images.unsplash.com/photo-1579417195379-5f6916d883a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`} : {background: "mauve"}}
                  message="Thrifty Transport" description={isEarned ? "Earned Jun-21" : "Achievement not unlocked"} type={isEarned ? "success" : "error"} showIcon />
  }

  function Tfsa(props) {
    const isEarned = props.isEarned;
    return <Alert style={isEarned ? {background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.6)), url("https://images.unsplash.com/photo-1579417195379-5f6916d883a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`} : {background: "mauve"}}
                  message="Terrific TFSA" description={isEarned ? "Earned Jun-21" : "Achievement not unlocked"} type={isEarned ? "success" : "error"} showIcon />
  }

  return (
    <>
      <div class="entire">
      <br></br>
      <h2 class="section">Achievements earned since your last visit</h2>
      <div class="container">
        <div class="container-ind">
           <Tooltip title="Congratulations, you've saved at least 10% of your income every month in the past year!" placement="bottomLeft">
             <span>
               <Saver isEarned={true} data={transactions} isClosable={true} />
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
           <Tooltip title="Lowered your total debt each month in each of the past 3 months." placement="bottomLeft">
             <span>
               <Debt isEarned={true} data={transactions}/>
             </span>
           </Tooltip>
         </div>
         <div class="container-ind">
           <Tooltip title="Spent less on food and groceries last month, compared to the month before." placement="bottomLeft">
             <span>
               <Grocery isEarned={true} data={transactions}/>
             </span>
           </Tooltip>
         </div>
         <br></br>
         <div class="container-ind">
           <Tooltip title="Spent less than 5% of your total income on electricity and natural gas bills over the last 12 months." placement="bottomLeft">
             <span>
               <Energy isEarned={true} data={transactions}/>
             </span>
           </Tooltip>
         </div>
      </div>
      <br></br>
      <h2 class="section">Unearned Achievements</h2>
      <div class="container">
      <div class="container-ind">
          <Tooltip title="Unlock this achievement by spending less than 15% of your total income on food and groceries for 3 consecutive months." placement="bottomLeft">
            <span>
              <Foodie isEarned={false} data={transactions}/>
            </span>
          </Tooltip>
        </div>
        <br></br>
        <div class="container-ind">
          <Tooltip title="Unlock this achievement by spending less than 10% of your total income on transportation over the last 12 months." placement="bottomLeft">
            <span>
              <Transport isEarned={false} data={transactions}/>
            </span>
          </Tooltip>
        </div>
        <br></br>
        <div class="container-ind">
          <Tooltip title="Unlock this achievement by maintaining a combined minimum balance of $10,000 across all TFSA accounts for 6 consecutive months." placement="bottomLeft">
            <span>
              <Tfsa isEarned={false} data={transactions}/>
            </span>
          </Tooltip>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
    </>
  );

}

export default Badge;