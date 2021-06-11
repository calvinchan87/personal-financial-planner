import { React, Component } from 'react';
import { Alert, Button, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import '../styles/badge.css';

function Grocery(props) {
  const isEarned = props.isEarned;
  if (isEarned) {
    return <Alert style={{background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.7)), url("https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`}}
                  message="Grocery Guru" type="success" showIcon />
  }
  return <Alert style={{background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.7)), url("https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`}}
                message="Grocery Guru" type="error" showIcon />
}

function Saver(props) {
  const isEarned = props.isEarned;
  if (isEarned) {
    return <Alert style={{background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.7)), url("https://images.unsplash.com/photo-1512075135822-67cdd9dd7314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`}}
                  message="Super Saver" type="success" showIcon />
  }
  return <Alert style={{background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.7)), url("https://images.unsplash.com/photo-1512075135822-67cdd9dd7314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`}}
                message="Super Saver" type="error" showIcon />
}

function Debt(props) {
  const isEarned = props.isEarned;
  if (isEarned) {
    return <Alert style={{background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.6)), url("https://images.unsplash.com/photo-1554475025-787dd4309d6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`}}
                  message="Debt Destroyer" type="success" showIcon />
  }
  return <Alert style={{background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.6)), url("https://images.unsplash.com/photo-1554475025-787dd4309d6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`}}
                message="Debt Destroyer" type="error" showIcon />
}

function Energy(props) {
  const criteria = props.data;
  const dataLength = criteria.filter(transaction => {
    if (transaction.amount > 2) {
      return true
    }
    return false
  }).length;
  const isEarned = dataLength > 0 ? true : false;
  return <Alert style={{background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.6)), url("https://images.unsplash.com/photo-1579417195379-5f6916d883a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640")`}}
                message="Energy Efficient" type={isEarned ? "success" : "error"} showIcon />
}

export default class Badge extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiResponse: []
    };
  }

  callAPI() {
    fetch("http://localhost:3001/testAPI")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    // console.log(this.state.apiResponse)
    return (
    <>
      <br></br>
      <h2 class="section">Achievements earned since your last visit</h2>
      <div class="container">
        <div class="container-ind">
          <Tooltip title="Spent less than the average Canadian (as a proportion of total income) in each of the last 3 months" placement="bottomLeft">
            <span>
              <Saver isEarned={true} />
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
              <Saver isEarned={true} />
            </span>
          </Tooltip>
        </div>
        <br></br>
        <div class="container-ind">
          <Tooltip title="Unlock this achievement by lowering your total debt each month for the next 3 months." placement="bottomLeft">
            <span>
              <Debt isEarned={false} />
            </span>
          </Tooltip>
        </div>
        <div class="container-ind">
          <Tooltip title="Spent less than the average Canadian (as a proportion of total income) last month" placement="bottomLeft">
            <span>
              <Grocery isEarned={true} />
            </span>
          </Tooltip>
        </div>
        <br></br>
        <div class="container-ind">
          <Tooltip title="Unlock this achievement by spending less than 5% of your total income on electricity and natural gas bills over the last 12 months." placement="bottomLeft">
            <span>
              <Energy isEarned={false} data={this.state.apiResponse} />
            </span>
          </Tooltip>
        </div>
      </div>
      <br></br>
      {/* <h6>{this.state.apiResponse}</h6> */}
      <h6>{this.state.apiResponse.map(transaction => {
        return <div key={transaction.id}>{transaction.amount}</div>
      })}</h6>
      <br></br>
      <h6>{this.state.apiResponse.filter(transaction => {
        if (transaction.amount > 2) {
          return true
        }
        return false
      }).length
      }</h6>
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
}