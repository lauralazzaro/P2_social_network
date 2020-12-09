const comment = require('../models/commentModel');
const fs = require('fs');

exports.getAllComments = (req, res) => {
    comment.findAll({
        include: ['user'],
        where: {id_post: req.params.id},
        order: [
            ['createdAt', 'DESC']
        ]
    })
        .then((comments) => res.status(200).json(comments))
        .catch((err) => res.status(400).json({err}))
};

exports.createComment = (req, res) => {
    const data = req.body;
    const imgUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null;
    const text = data.text ? data.text : null;

    comment.create({
        id_user: data.id_user,
        id_post: data.id_post,
        text: text,
        imageUrl: imgUrl
    })
        .then(() => res.status(200).json({message: 'comment created'}))
        .catch((err) => res.status(400).json({err}))
};

exports.updateComment = (req, res) => {
    const data = req.body;
    const imgUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : req.body.imageUrl;
    const text = data.text ? data.text : null;

    comment.update({
            text: text,
            imageUrl: imgUrl
        },
        {where: {id_comment: req.params.id}})
        .then(() => res.status(200).json({message: 'comment updated'}))
        .catch((err) => res.status(400).json({err}))
};

exports.deleteComment = (req, res) => {
    comment.findOne({where: {id_comment: req.params.id}})
        .then((found) => {
            if (found.imageUrl !== 'null') {
                const filename = found.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, (err) => {
                    if (err) throw err;
                });
            } else throw ('Post not found');
        }).catch((err) => res.status(500).json(err));

    comment.destroy({where: {id_comment: req.params.id}})
        .then(() => res.status(200).json({message: 'comment deleted'}))
        .catch((err) => res.status(400).json({err}))
};

exports.getOneComment = (req, res) => {
    comment.findOne({
        where: {id_comment: req.params.id},
        include: 'user'
    })
        .then((post) => res.status(200).json(post))
        .catch((err) => res.status(400).json({err}))
};