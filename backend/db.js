const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'calvinchan',
  password: 'new_password',
  host: 'localhost',
  port: 5432,
  database: 'postgres'
});

module.exports = pool;