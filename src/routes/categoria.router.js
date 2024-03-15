const { getAll, create, getOne, remove, update } = require('../controllers/categoria.controllers');
const express = require('express');

const categoriaRouter = express.Router();

categoriaRouter.route('/categorias')
    .get(getAll)
    .post(create);

categoriaRouter.route('/categorias/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = categoriaRouter;