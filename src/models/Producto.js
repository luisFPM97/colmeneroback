const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

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

module.exports = Producto;