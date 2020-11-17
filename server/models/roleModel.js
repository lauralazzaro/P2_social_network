const Sequelize = require('sequelize');
const db = require('../database/db.connect');

const role = db.define('role', {
    id_role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: true,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
    }
});

module.exports = role;