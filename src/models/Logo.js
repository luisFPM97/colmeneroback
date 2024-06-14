const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Logo = sequelize.define('logo', {
    logo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

module.exports = Logo;