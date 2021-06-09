import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Rows} from '../helpers/transactionsPie'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = Rows();
// const rows = [
//   { 
//     id: 1,
//     date: 'June 1, 2021',
//     description: "Whole Foods",
//     category: "shelter",
//     amount: 100
//   },
//   { 
//     id: 1,
//     date: 'June 2, 2021',
//     description: "Whole Foods",
//     category: "transportation",
//     amount: 100
//   },
//   { 
//     id: 1,
//     date: 'June 3, 2021',
//     description: "Whole Foods",
//     category: "food",
//     amount: 100
//   },
//   { 
//     id: 1,
//     date: 'June 4, 2021',
//     description: "Whole Foods",
//     category: "household",
//     amount: 100
//   },
//   { 
//     id: 1,
//     date: 'June 5, 2021',
//     description: "Whole Foods",
//     category: "food",
//     amount: 100
//   },
//   { 
//     id: 1,
//     date: 'June 6, 2021',
//     description: "Whole Foods",
//     category: "household",
//     amount: 100
//   },
//   { 
//     id: 1,
//     date: 'June 4, 2021',
//     description: "Whole Foods",
//     category: "shelter",
//     amount: 100
//   },
//   { 
//     id: 1,
//     date: 'June 1, 2021',
//     description: "Whole Foods",
//     category: "food",
//     amount: 100
//   },
//   { 
//     id: 1,
//     date: 'June 1, 2021',
//     description: "Whole Foods",
//     category: "transportation",
//     amount: 100
//   },
//   { 
//     id: 1,
//     date: 'June 2, 2021',
//     description: "Whole Foods",
//     category: "food",
//     amount: 100
//   },
//   { 
//     id: 1,
//     date: 'June 3, 2021',
//     description: "Whole Foods",
//     category: "food",
//     amount: 100
//   },
// ]

// function createData(id, date, description, category, amount) {
//   return { id, date, description, category, amount };
// }


// const rows = [
//   createData(1, 'June 5, 2021', "Whole Foods", "food", 100),
//   createData(2, 'June 6, 2021', "Whole Foods", "food", 200),
//   createData(3, 'June 4, 2021', "Gas", "transportation", 50),
//   createData(4, 'June 1, 2021', "Rent", "shelter", 1800),
//   createData(5, 'June 2, 2021', "Gas", "transportation", 60),
//   createData(6, 'June 2, 2021', "Earls", "food", 65),
//   createData(7, 'June 3, 2021', "Bed Bath & Beyond", "household", 200),
//   createData(8, 'June 1, 2021', "Utilities", "shelter", 100),
// ];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Amount&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}