const { getAll, create, getOne, remove, update } = require('../controllers/subcategoria.controllers');
const express = require('express');

const subcategoriaRouter = express.Router();

subcategoriaRouter.route('/subcategorias')
    .get(getAll)
    .post(create);

subcategoriaRouter.route('/subcategorias/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = subcategoriaRouter;