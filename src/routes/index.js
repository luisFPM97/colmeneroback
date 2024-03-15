const express = require('express');
const categoriaRouter = require('./categoria.router');
const descriptRouter = require('./descript.router');
const empresaRouter = require('./empresa.router');
const productoRouter = require('./producto.router');
const subcategoriaRouter = require('./subcategorias.router');
const router = express.Router();

// colocar las rutas aquí
router.use(categoriaRouter);
router.use(descriptRouter);
router.use(empresaRouter);
router.use(productoRouter);
router.use(subcategoriaRouter);

module.exports = router;