const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'kiupkim',
  password: 'ilikeps3',
  host: 'localhost',
  port: 5432,
  database: 'personalfp'
});

module.exports = pool;