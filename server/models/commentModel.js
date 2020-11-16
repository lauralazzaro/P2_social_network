const Sequelize = require('sequelize');
const db = require('../database/db.connect');

const comment = db.define('comment', {
    id_comment: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unsigned: true,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    id_post: {
        type: Sequelize.INTEGER,
        unsigned: true,
    },
    id_user: {
        type: Sequelize.INTEGER,
        unsigned: true,
    },
    text:{
        type: Sequelize.TEXT
    },
    imageUrl:{
        type: Sequelize.STRING,
        unsigned: true,
    }
});

module.exports = comment;