const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Subcategoria = sequelize.define('subcategoria', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Subcategoria;