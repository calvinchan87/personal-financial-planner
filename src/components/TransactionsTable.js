import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import TableFooter from '@material-ui/core/TableFooter';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import '../styles/transactionsPage.css'
import { blue } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
    color: '#919090'
  },
}));


function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;
  
  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };
  
  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };
  
  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };
  
  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
        >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


const useStyles = makeStyles({
  tableContainer: {
    borderRadius: 15,
    minWidth: 800,
  },
  tableHeaderCell: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    backgroundColor: "#a7c8fcfb",
    color: 'white',
  },
  body: {
    fontFamily: 'inherit',
    color: '#919090',
    // backgroundColor: '#FAF1F1'
  },
  cat: {
    fontFamily: 'inherit',
    fonstSize: '0.75rem',
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 8,
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '3px',
    paddingBottom: '3px',
    display: 'inline-block',
  }
});

export default function BasicTable(props) {
  const classes = useStyles();
  const rows = props.filteredRows;
  const customTableStyle = {width: 100}
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="transaction-table">
      <Paper className={classes.paper} style={{boxShadow: 'none'}}>
    <TableContainer component={Paper} style={{boxShadow: 'none'}}>
      <Table style={customTableStyle} className={classes.tableContainer} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell} >Date</TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">Description</TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">Category</TableCell>
            <TableCell className={classes.tableHeaderCell} align="right">Amount&nbsp;($)</TableCell>
          </TableRow>
        </TableHead >
        <TableBody >
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{fontWeight: 'bold'}} className={classes.body} component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell className={classes.body} align="right">{row.description}</TableCell>
              <TableCell align="right">
                <Typography 
                  className={classes.cat}
                  style={{
                    backgroundColor:
                    ((row.category === 'food' && '#008376') ||
                    (row.category === 'transportation' && '#008376') ||
                    (row.category === 'shelter' && '#77A6F7') ||
                    (row.category === 'health & personal' && '#FFCCBC') ||
                    (row.category === 'household' && '#FFCCBC') ||
                    (row.category === 'recreation, education, & reading' && '#cbdcfa') ||
                    (row.category === 'alcohol & tobacco' && '#cbdcfa') ||
                    (row.category === 'clothing & footwear' && '#77A6F7')),
                    // color: ((row.category === 'reacreation, education, & reading' && '#b8b7b7') ||
                    // (row.category === 'alcohol & tobacco' && '#a1a0a0'))
                  }}>
                {row.category}
                </Typography>
                </TableCell>
              <TableCell className={classes.body} align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
           {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              style={{
                color: '#919090',
              }}
            />
          </TableRow>
        </TableFooter>

      </Table>
    </TableContainer>
        </Paper>
    </div>
  );
}
