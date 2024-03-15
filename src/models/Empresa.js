const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Empresa = sequelize.define('empresa', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mision: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    vision: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    eslogan: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

module.exports = Empresa;