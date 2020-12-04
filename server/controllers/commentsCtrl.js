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
    const data = req.body.comment;
    comment.findOne({where: {id_comment: data.id_comment}})
        .then((found) => {
            if (found) {
                comment.update({
                        id_user: data.id_user,
                        text: data.text,
                        imageUrl: data.imageUrl
                    },
                    {where: {id_comment: req.params.cmt}})
                    .then(() => res.status(200).json({message: 'comment updated'}))
                    .catch((err) => res.status(400).json({err}))
            } else {
                throw new Error('Comment not found');
            }
        })
        .catch((err) => res.status(500).json(err))
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

            comment.destroy({where: {id_comment: req.params.id}})
                .then(() => res.status(200).json({message: 'comment deleted'}))
                .catch((err) => res.status(400).json({err}))
        }).catch((err) => res.status(500).json(err))
};