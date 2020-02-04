const db = require('./database');

async function insertInto() {

  await db.connect();

  await db.query(`INSERT INTO users (email, password) 
    VALUES ('allanasilva2701@gmail.com', 'amoraebombom27')`);
  
    console.log('Usuario adicionado');

  await db.end();
}

insertInto();