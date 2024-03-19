const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Producto = require('./Producto');

const Subcategoria = sequelize.define('subcategoria', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Producto.hasMany(Subcategoria);
Subcategoria.belongsTo(Producto);

module.exports = Subcategoria;