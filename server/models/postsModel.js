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
        allowNull: true,
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL'
    },
    text: {
        type: Sequelize.TEXT
    },
    imageUrl: {
        type: Sequelize.STRING,
        unsigned: true,
    }
});

module.exports = post;