const db = require('./database');
const bcrypt = require('bcrypt');

class UserDao {

	async findById(id) {

		await db.connect();

		const user = await db.query(`SELECT * FROM users WHERE ID = ${id}`);

		return user;
	}

	async findByEmail(email) {

		await db.connect();

		const user = await db.query(`SELECT * FROM users WHERE email = '${email}'`);
		
		const emptyUser = [
			{
				'email': 'wr0ngUs3r',
				'password': 'pimba'
			}
		]

		if (user.rowCount < 1) {
			return emptyUser
		} 

		return user.rows[0];


	}

	async insert(user) {

		await db.connect();

		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, async (err, hash) => {
				await db.query(`INSERT INTO users (
					email,
					password,
					name
			) VALUES ('${user.email}', '${hash}', '${user.name}')`)
				
			})
		})

		
	};

}

module.exports = UserDao;