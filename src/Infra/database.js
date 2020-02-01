const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'brunofow',
  host: 'localhost',
  database: 'superlist',
  password: 'rayepenber',
  port: 5432
});

module.exports = pool;