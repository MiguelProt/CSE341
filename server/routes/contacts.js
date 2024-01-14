const express = require('express');
const contacts = require('../controllers/contacts');
const routes = express.Router();
routes.get('/:id?', contacts.getAllData);
routes.post('/', contacts.insertDocument);
routes.put('/:id', contacts.updateDocument);
routes.delete('/:id', contacts.deleteDocument);

module.exports = routes;