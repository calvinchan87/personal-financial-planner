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

import '../styles/overview.css'

const faker = require('faker');

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    backgroundColor: "#a7c8fcfb",
    color: 'white',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.error.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
      minWidth: 700,
    },
  body: {
    fontFamily: 'inherit',
    color: '#919090',
  }
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
  const customTableStyle = {width: 100}
  
  console.log("cash array", cashArray());
  
  return <div className="acctsummarytable">
    <TableContainer component={Paper}>
      <Table style={customTableStyle} className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cash</StyledTableCell>
            <StyledTableCell align="right">Total: ${cashSum()} </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cashArray().map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell className={classes.body}  component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell className={classes.body} style={{fontWeight: 'bold'}} align="right">${row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>Credit Cards</StyledTableCell>
            <StyledTableCell align="right">Total: -${creditCardSum()} </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {creditCardArray().map((row) => (
          <StyledTableRow key={row.id} className={classes.body}>
              <StyledTableCell className={classes.body}  component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell className={classes.body} style={{fontWeight: 'bold'}} align="right">-${row.balance}</StyledTableCell>
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
              <StyledTableCell className={classes.body}  component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell className={classes.body} style={{fontWeight: 'bold'}} align="right">${row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>Loans</StyledTableCell>
            <StyledTableCell align="right">Total: -${loanSum()} </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {loansArray().map((row) => (
          <StyledTableRow key={row.id}>
              <StyledTableCell className={classes.body}  component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell className={classes.body} style={{fontWeight: 'bold'}} align="right">-${row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
    </div>
}

export default CustomizedTables;


