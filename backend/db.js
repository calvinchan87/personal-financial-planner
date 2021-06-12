const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'carolynscobie',
  password: 'thisismypassw0rd',
  host: 'localhost',
  port: 5432,
  database: 'final_project'
});

module.exports = pool;




