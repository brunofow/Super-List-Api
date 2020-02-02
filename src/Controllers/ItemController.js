const ItemDao = require('../Infra/ItemDao');

const itemDao = new ItemDao();

module.exports = {

  async index(req, resp) {

    const items = await itemDao.select();

    resp.json(items);

  },

  async store(req, resp) {

    itemDao.insert(req.body);

    resp.json({ message: `${req.body.name} adicionado`});

  },

  async update(req, resp) {

    const { id } = req.params;

    itemDao.update(id, req.body);

    resp.json({ message: `${req.body.name} alterado`});

  },

  async destroy(req, resp) {

    const { id } = req.params;

    const item = await itemDao.findById(id);

    itemDao.delete(id);

    resp.json({ message: `Item desletado`});
  }
}

