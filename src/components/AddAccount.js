import React from 'react';
import {PlusCircleOutlined} from '@ant-design/icons'
import '../styles/addAccount.css'


const AddAccount = () => {

  return (
    <div className='new-acct'>
    <PlusCircleOutlined style={{width: '40px', fontSize:25, color: '#00887A'}}/>
  <div>
    <h3 style={{color: '#00887A', fontFamily: 'Roboto, sans-serif'}}>Add new account</h3>
  </div>
    </div>
  )
}

export default AddAccount;