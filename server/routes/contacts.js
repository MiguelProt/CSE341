const express = require('express');
const contacts = require('../controllers/contacts');
const routes = express.Router();
routes.get('/:id?', contacts.getAllData);
routes.post('/', contacts.createUser);
routes.put('/:id', contacts.updateUser);
routes.delete('/:id', contacts.deleteUser);

module.exports = routes;