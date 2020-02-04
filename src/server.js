const express = require('express');

const routes = require('./Routes/routes');
const auth = require('./auth')();

const server = express();

server.use(express.json());
server.use(routes);

server.use(auth.initialize());

server.listen(3333);