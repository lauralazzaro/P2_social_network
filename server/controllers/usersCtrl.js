const userModel = require('../models/userModel');
const {Op} = require('sequelize');

exports.signup = (req, res) => {
    const {email, password, username, id_role} = req.body;

    userModel.create({
        email,
        password,
        username,
        id_role
    })
        .then(() => res.status(201).json({message: 'User created!'}))
        .catch((err) => res.status(400).json({err}));
}

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email)

    userModel.findOne({
        where: {
            [Op.and]: [
                {email: email},
                {password: password}
            ]
        }
    })
        .then((user) => res.status(201).json(user))
        .catch((err) => res.status(400).json({err}));
}