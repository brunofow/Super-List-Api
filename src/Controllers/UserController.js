const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');

const UserDao = require('../Infra/UserDao');
const cfg = require('../config');

const userDao = new UserDao();


module.exports = {

  async index(req, resp) {
    if (req.body.email && req.body.password) {
      const { email, password } = req.body;
      const user = await userDao.findByEmail(email);
      
      const match = await bcrypt.compare(password, user.password);

      if (user.email && match) {
        const payload = { id: user.id };
        const token = jwt.encode(payload, cfg.jwtSecret);
        resp.json({ token: token, user });
      } else {
        resp.sendStatus(401);
      }
    } else {
      resp.sendStatus(401);
    }
  },

  async store(req, resp) {

    const { email, password, confirmPassword } = req.body;

    const registeredUser = await userDao.findByEmail(email);

    if (registeredUser.email == email) {
      resp.json({ emailMessage: 'Usuário já cadastrado' })
    } else if(password != confirmPassword) {
      resp.json({ passwordMessage: 'Senhas não conferem'})
    } else {
      await userDao.insert(req.body);

      resp.json({ success: 'Cadastrado com sucesso' })
    }


  }

}