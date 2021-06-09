import React from 'react';
import { Alert, Button } from 'antd';
import 'antd/dist/antd.css';
import '../styles/badge.css';

const Badge = () => {

  return (
    <>
      <h2 class="headline">Achievements earned since your last visit</h2>
      <div class="container">
      <Alert
        message="Grocery Guru"
        description="Spent less than the average Canadian (as a proportion of total income) in each of the last 3 months"
        type="success"
        showIcon
        closable
      />
      </div>
      <br></br>
      <h2 class="headline">Savings</h2>
      <div class="container">
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
      </div>
      <br></br>
      <h2 class="headline">Spending</h2>
      <div class="container">
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
      </div>
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
    </>
  );

}

export default Badge;