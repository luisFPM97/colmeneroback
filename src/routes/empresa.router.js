const { getAll, create, getOne, remove, update } = require('../controllers/empresa.controllers');
const express = require('express');

const empresaRouter = express.Router();

empresaRouter.route('/empresas')
    .get(getAll)
    .post(create);

empresaRouter.route('/empresas/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = empresaRouter;