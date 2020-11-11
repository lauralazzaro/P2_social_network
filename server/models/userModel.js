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
            allowNull: false,
            unique: true
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        username:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        id_role:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

module.exports = user;