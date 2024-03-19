const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Subcategoria = require('./Subcategoria');

const Descript= sequelize.define('decript', {
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

Subcategoria.hasMany(Descript);
Descript.belongsTo(Subcategoria);

module.exports = Descript