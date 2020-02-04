const express = require('express');

const routes = express.Router();

const ItemController = require('../Controllers/ItemController');
const UserController = require('../Controllers/UserController');

routes.post('/register', UserController.store);

routes.post('/token', UserController.index);

routes.get('/list', ItemController.index);

routes.post('/add', ItemController.store);

routes.put('/edit/:id', ItemController.update);

routes.delete('/remove/:id', ItemController.destroy);

module.exports = routes;