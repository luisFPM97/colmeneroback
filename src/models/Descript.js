const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Descript= sequelize.define('decript', {
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

module.exports = Descript