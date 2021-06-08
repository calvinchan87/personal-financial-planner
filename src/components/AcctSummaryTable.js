import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const faker = require('faker');

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(account, balance) {
  return { account, balance };
}

const bankRows = [
  createData('Checking Account', 10000.00),
  createData('Savings Account', 20000.00)
];

const ccRows = [
  createData('Credit Card Account', 1000.00)
]

const invRows = [
  createData('Investment Account', 60000.00),
  createData('Money Market Account', 30000.00)
]

const loanRows = [
  createData('Personal Loan Account', 5000.00),
  createData('Auto Loan Account', 15000.00),
  createData('Home Loan Account', 200000.00)
]

let bankResult = bankRows.map(( { balance }) => balance);
let bankSum = bankResult.reduce(function(a, b){
  return a + b;
}, 0)

let ccResult = ccRows.map(( { balance }) => balance);
let cckSum = ccResult.reduce(function(a, b){
  return a + b;
}, 0)

let invResult = invRows.map(( { balance }) => balance);
let invSum = invResult.reduce(function(a, b){
  return a + b;
}, 0)

let loanResult = loanRows.map(( { balance }) => balance);
let loanSum = loanResult.reduce(function(a, b){
  return a + b;
}, 0)

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Bank Accounts</StyledTableCell>
            <StyledTableCell align="right">Total: ${bankSum.toFixed(2)} </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bankRows.map((row) => (
            <StyledTableRow key={row.account}>
              <StyledTableCell component="th" scope="row">
                {row.account}
              </StyledTableCell>
              <StyledTableCell align="right">${row.balance.toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>Credit Cards</StyledTableCell>
            <StyledTableCell align="right">Total: ${cckSum.toFixed(2)} </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {ccRows.map((row) => (
            <StyledTableRow key={row.account}>
              <StyledTableCell component="th" scope="row">
                {row.account}
              </StyledTableCell>
              <StyledTableCell align="right">${row.balance.toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>Investments</StyledTableCell>
            <StyledTableCell align="right">Total: ${invSum.toFixed(2)} </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {invRows.map((row) => (
            <StyledTableRow key={row.account}>
              <StyledTableCell component="th" scope="row">
                {row.account}
              </StyledTableCell>
              <StyledTableCell align="right">${row.balance.toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>Loans</StyledTableCell>
            <StyledTableCell align="right">Total: ${loanSum.toFixed(2)} </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {loanRows.map((row) => (
            <StyledTableRow key={row.account}>
              <StyledTableCell component="th" scope="row">
                {row.account}
              </StyledTableCell>
              <StyledTableCell align="right">${row.balance.toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}
