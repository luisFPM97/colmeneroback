const { getAll, create, getOne, remove, update } = require('../controllers/descript.controllers');
const express = require('express');

const descriptRouter = express.Router();

descriptRouter.route('/descripts')
    .get(getAll)
    .post(create);

descriptRouter.route('/descripts/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = descriptRouter;