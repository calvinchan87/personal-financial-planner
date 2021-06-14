const Pool = require('pg').Pool;

const pool = new Pool({
  // user: 'calvinchan',
  // password: 'new_password',
  // host: 'localhost',
  // port: 5432,
  // database: 'postgres'

  // user: 'kiupkim',
  // password: 'ilikeps3',
  // host: 'localhost',
  // port: 5432,
  // database: 'personalfp'

  user: 'carolynscobie',
  password: 'thisismypassw0rd',
  host: 'localhost',
  port: 5432,
  database: 'final_project'

});

module.exports = pool;