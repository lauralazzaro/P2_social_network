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
module.exports = (sequelize, DataTypes) => {
    sequelize.define('user', {
        id_user: {
            type: DataTypes.INT,
            allowNull: false,
            unsigned: true,
            autoIncrement: true,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        id_role:{
            type: DataTypes.INT,
            allowNull: false
        }
    })
};
