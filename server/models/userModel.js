const Sequelize = require('sequelize');
const db = require('../database/db.connect');

const user = db.define('user', {
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: true,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    id_role: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unsigned: true,
        reference: {
            model: 'role',
            key: 'id_role'
        }
    }
});

module.exports = user;