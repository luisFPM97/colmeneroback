const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Empresa = require('./Empresa');

const Categoria = sequelize.define('categoria', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});
Empresa.hasMany(Categoria);
Categoria.belongsTo(Empresa);

module.exports = Categoria;