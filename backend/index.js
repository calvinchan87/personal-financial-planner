const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes

// create transactions
app.post("/transactions", async(req, res) => {
  try {
    const { user_account_details_id, user_id, category_id, description, date, amount } = req.body;
    const newTransactions = await pool.query(
      "INSERT INTO transactions (user_account_details_id, user_id, category_id, description, date, amount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ",
      [user_account_details_id, user_id, category_id, description, date, amount]
    );

    res.json(newTransactions.rows[0]);
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
})

// get all transactions
app.get("/transactions", async(req, res) => {
  try {
    const allTransactions = await pool.query("SELECT * FROM transactions")
    res.json(allTransactions.rows)
  } catch (err) {
    console.error(err.message)
  }
})

// get all category
app.get("/category", async(req, res) => {
  try {
    const allCategory = await pool.query("SELECT * FROM category")
    res.json(allCategory.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(5000, () => {
  console.log("server has started on port 5000");
})