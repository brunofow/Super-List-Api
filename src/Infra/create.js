const db = require('./database');

async function createTable() {

  await db.connect();
  
  await db.query(`CREATE TABLE IF NOT EXISTS items(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    amount INTEGER,
    price REAL
  )`)

  await db.query(`CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(250),
    name VARCHAR(42)
  )`)

  await db.end();

};

createTable();