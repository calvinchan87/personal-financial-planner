const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const { GRID_COLUMN_VISIBILITY_CHANGE } = require('@material-ui/data-grid');

// middleware
app.use(cors());
app.use(express.json()); // req.body

//ROUTES

app.get("/", async(req, res) => {
  try {
    res.send("go to /transactions")
  } catch (error) {
    console.log(err.message);
  }
})

// get all transactions
app.get("/transactions", async(req, res) => {
  try {
    const allTransactions = await pool.query("SELECT transactions.id, date, description, category.category, amount FROM transactions JOIN category ON transactions.category_id = category.id ORDER BY transactions.year DESC, transactions.month DESC");
    res.json(allTransactions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/overview", async(req, res) => {
  try {
    const overviewDetails = await pool.query("SELECT useraccountdetails.id, accounttypes.account_name, description, balance FROM useraccountdetails JOIN accounttypes ON useraccountdetails.account_type_id = accounttypes.id;");
    res.json(overviewDetails.rows);
  } catch (err) {
    console.log(err.message);
  }
})

app.get("/spendtrend", async(req, res) => {
  try {
    const overviewDetails = await pool.query("SELECT month, year, date, category.category, amount FROM transactions JOIN category ON category_id = category.id WHERE year = 2021;");
    res.json(overviewDetails.rows);
  } catch (err) {
    console.log(err.message);
  }
})


app.listen(5000, () => {
  console.log('listening on port 5000 yo')
});