import React,{ Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListTransactions = () => {

  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {

      const response = await fetch('http://localhost:5000/transactions')
      const jsonData = await response.json()

      console.log(jsonData);

      setTransactions(jsonData);
    } catch (err) {
      console.error(err.message)
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);
  const classes = useStyles();
  // const rows = props.filteredRows;
  // const customTableStyle = {width: 100}

  // return (
  //   <TableContainer component={Paper}>
  //     <Table style={customTableStyle} className={classes.table} aria-label="simple table">

  return (
    <Fragment>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Date</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Amount&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(transaction => (
            <TableRow key={transaction.id}>
              <TableCell component="th" scope="row">
                {transaction.date}
              </TableCell>
              <TableCell align="right">{transaction.description}</TableCell>
              <TableCell align="right">{transaction.category_id}</TableCell>
              <TableCell align="right">{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Fragment>
  )
};

export default ListTransactions;

