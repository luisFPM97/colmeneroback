const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Categoria = require('./Categoria');

const Producto = sequelize.define('producto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

Categoria.hasMany(Producto);
Producto.belongsTo(Categoria);

module.exports = Producto;