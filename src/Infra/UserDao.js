const db = require('./database');

class UserDao {

	async findById(id) {

		await db.connect();

		const user = await db.query(`SELECT * FROM users WHERE ID = ${id}`);

		return user;

	}

	async findByEmail(email) {

		await db.connect();

		const user = await db.query(`SELECT * FROM users WHERE email = ${email}`);

		return user;
	}

	async insert(user) {

		await db.connect();

		await db.query(`INSERT INTO users (
            username,
            password
        ) VALUES (${user.username}, ${user.password})`)
	};

}

module.exports = UserDao;