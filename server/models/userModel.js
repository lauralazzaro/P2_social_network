// const {Sequelize, DataTypes} = require('sequelize');
// const sequelize = new Sequelize('mysql');
//
// const userModel = sequelize.define('user', {
//     id_user: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         unsigned: true,
//         autoIncrement: true,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     password:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     username:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     id_role:{
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
// });
//
// module.exports = userModel;
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