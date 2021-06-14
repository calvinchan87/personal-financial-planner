import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useOverviewData from '../helpers/accountSummary';

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

const useStyles = makeStyles({
  table: {
      minWidth: 700,
    },
});



const CustomizedTables = () => {
  const {
    overview, 
    Rows, 
    cashSum, 
    creditCardSum, 
    investmentsSum, 
    loanSum, 
    cashArray, 
    creditCardArray, 
    investmentArray, 
    loansArray} = useOverviewData();
  const classes = useStyles();
  
  console.log("cash array", cashArray());
  
  return <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cash</StyledTableCell>
            <StyledTableCell align="right">Total: ${cashSum()} </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cashArray().map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="right">${row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>Credit Cards</StyledTableCell>
            <StyledTableCell align="right">Total: ${creditCardSum()} </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {creditCardArray().map((row) => (
          <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="right">${row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>Investments</StyledTableCell>
            <StyledTableCell align="right">Total: ${investmentsSum()} </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {investmentArray().map((row) => (
          <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="right">${row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>Loans</StyledTableCell>
            <StyledTableCell align="right">Total: ${loanSum()} </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {loansArray().map((row) => (
          <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="right">${row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
    </div>
}

export default CustomizedTables;


