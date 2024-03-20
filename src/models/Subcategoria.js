const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Producto = require('./Producto');
const Categoria = require('./Categoria');

const Subcategoria = sequelize.define('subcategoria', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Categoria.hasMany(Subcategoria);
Subcategoria.belongsTo(Categoria);

module.exports = Subcategoria;