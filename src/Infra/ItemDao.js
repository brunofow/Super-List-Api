const db = require('./database');

class ItemDao {

  async findById(id) {

    await db.connect();

    const item = await db.query(`SELECT * FROM items WHERE ID = ${id}`);

    return item;
  }


  async select() {

    await db.connect();

    const result = await db.query(`SELECT * FROM items`)

    const items = result.rows;

    return items;

  }

  async insert(item) {

    await db.connect();


    await db.query(`INSERT INTO items (
        name,
        amount,
        price
      ) VALUES ('${item.name}', ${item.amount}, ${item.price})`)

  };

  async update(id, item) {

    await db.connect();

    await db.query(`UPDATE items SET name = '${item.name}',
      amount = ${item.amount},
      price = ${item.price}
      WHERE ID = ${id}`);

  };

  async delete(id) {

    await db.connect();

    await db.query(`DELETE FROM items WHERE ID = ${id}`)

  }
}

module.exports = ItemDao;


