const db = require('./database');
const readlineSync = require('readline-sync');

function deleteQuestion() {
  
  const option = readlineSync.question(`O que deseja deletar?
  1 - Tudo
  2 - Apenas Um`)

  if(option == 1) {
    deleteAll();
    return;
  } 
}

async function deleteAll() {

  await db.connect();

  await db.query(`DELETE FROM items`)

  await db.end();

  console.log('Deletado')

}

deleteQuestion();