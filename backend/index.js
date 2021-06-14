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
  } catch (err) {
    console.log(err.message);
  }
})

// get all transactions
app.get("/transactions", async(req, res) => {
  try {
    const allTransactions = await pool.query(`SELECT transactions.id, date, description, category.category, amount FROM transactions JOIN category ON transactions.category_id = category.id`);
    // const allTransactions = await pool.query("SELECT transactions.id, date, description, category.category, amount FROM transactions JOIN category ON transactions.category_id = category.id ORDER BY transactions.year DESC, transactions.month DESC");
    res.json(allTransactions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get all transactions
app.get("/badges", async(req, res) => {
  try {
    const allTransactions = await pool.query("SELECT transactions.id, date, category.category, amount, month, year FROM transactions JOIN category ON transactions.category_id = category.id");
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

// get sum
app.get("/sums", async(req, res) => {
  try {
    const allSums = await pool.query(`SELECT date, SUM(amount) as "expense" FROM transactions GROUP BY date, transactions.month, transactions.year  ORDER BY year, month`);
    allSums.rows.forEach(sum => {
      sum.income = 5000.00
      sum.expense = Number(sum.expense.replace(/[^0-9\.-]+/g,""));
    })
    res.json(allSums.rows);
    
  } catch (err) {
    console.error(err.message);
  }
})

app.get("/expenses", async(req, res) => {
  try {
    const allExpByCat = await pool.query(`SELECT category.category, SUM(amount) as "expense" FROM transactions JOIN category ON transactions.category_id = category.id GROUP BY  category.category ORDER BY category.category ASC`);
    allExpByCat.rows.forEach(category => {
      category.expense = Number(category.expense.replace(/[^0-9\.-]+/g,""));
    })
    res.json(allExpByCat.rows);

  } catch (err) {
    console.error(err.message);
  }
})

app.listen(5000, () => {
  console.log('listening on port 5000 yo')
});