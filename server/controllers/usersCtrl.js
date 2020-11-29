const userModel = require('../models/userModel');
const {Op} = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const id_role = req.body.id_role;

    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            userModel.create({
                email,
                password: hash,
                username,
                id_role
            })
                .then(() => res.status(201).json({message: 'User created!'}))
                .catch((err) => res.status(400).json({err}));
        }).catch((err) => res.status(500).json({err}));
}

exports.login = (req, res) => {

    userModel.findOne({
        where: {email: req.body.email},
        include: 'role'
    })
        .then((user) => {
            if (!user) {
                throw new Error('User not found');
            }
            bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if (!valid) {
                        throw new Error('Invalid password')
                    }

                    res.status(200).json({
                        id_user: user.id_user,
                        token: jwt.sign(
                            {id_user: user.id_user},
                            process.env.JWT_TOKEN,
                            {expiresIn: '24h'}
                        )
                    });
                })
                .catch((err) => res.status(500).json({err}));
        })
        .catch((err) => res.status(500).json({err}));
}