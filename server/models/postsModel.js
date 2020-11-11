const Sequelize = require('sequelize');
const db = require('../database/db.connect');

const post = db.define('post', {
    id_post: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: true,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    id_user: {
        type: Sequelize.INTEGER,
        unsigned: true,
    },
    text:{
        type: Sequelize.TEXT
    },
    id_image:{
        type: Sequelize.INTEGER,
        unsigned: true,
    },
    id_category:{
        type: Sequelize.INTEGER,
        unsigned: true,
    }
});

module.exports = post;