import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
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

function createData(accounts, balance) {
  return { accounts, balance };
}

const rows = [
  createData('Checking Account', 10000.00),
  createData('Saving Account', 20000.00),
  createData('Personal Loan Account', 5000.00),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Accounts</TableCell>
            <TableCell align="right">Total Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.accounts}>
              <TableCell component="th" scope="row">
                {row.accounts}
              </TableCell>
              <TableCell align="right">${parseFloat(row.balance).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}