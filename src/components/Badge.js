import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import { Progress } from 'antd';
import { Alert, Button } from 'antd';

const Badge = () => {

const mountNode = document.getElementById('root')

// ReactDOM.render(
//   <>
//     <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
//     <Progress type="circle" percent={100} format={() => 'Done'} />
//   </>,
//   mountNode,
// );

ReactDOM.render(
  <>
    <h2>Achievements earned since your last visit</h2>
    <Alert
      message="Grocery Guru"
      description="Spent less than the average Canadian (as a proportion of total income) in each of the last 3 months"
      type="success"
      showIcon
      closable
    />
    <br></br>
    <br></br>
    <h2>Savings</h2>
    <Alert
      message="Super Saver"
      description="Congratulations, you've saved at least 10% of your income every month in the past year!"
      type="success"
      showIcon
      action={
        <Button size="small" type="ghost">
          Detail
        </Button>
      }
    />
    <br></br>
    <Alert
      message="Debt Destroyer"
      description="Unlock this achievement by lowering your total debt each month for the next 3 months."
      type="error"
      showIcon
      action={
        <Button size="small" danger>
          Detail
        </Button>
      }
    />
    <br></br>
    <h2>Spending</h2>
    <Alert
      message="Grocery Guru"
      description="Spent less than the average Canadian (as a proportion of total income) in each of the last 3 months"
      type="success"
      showIcon
      action={
        <Button size="small" type="ghost">
          Detail
        </Button>
      }
    />
    <br></br>
    <Alert
      message="Energy Efficient"
      description="Unlock this achievement by spending less than 5% of your total income on electricity and natural gas bills over the last 12 months."
      type="error"
      showIcon
      action={
        <Button size="small" danger>
          Detail
        </Button>
      }
    />
    {/* <br></br>
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
    <br></br>
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
    /> */}
  </>,
  mountNode,
);

}

export default Badge;