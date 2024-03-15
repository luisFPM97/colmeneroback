const { getAll, create, getOne, remove, update } = require('../controllers/producto.controllers');
const express = require('express');

const productoRouter = express.Router();

productoRouter.route('/productos')
    .get(getAll)
    .post(create);

productoRouter.route('/productos/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = productoRouter;