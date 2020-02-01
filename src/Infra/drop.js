const db = require('./database');
const readlineSync = require('readline-sync')

async function dropTable() {

  const tableName = readlineSync.question('Qual o nome da tabela?');

  console.log(`Conectando com banco de dados`);
  await db.connect();
  console.log(`Deletando tabela ${tableName}`);
  await db.query(`DROP TABLE ${tableName} CASCADE`);
  await db.end();

  console.log('Tabela Removida');
}

dropTable();