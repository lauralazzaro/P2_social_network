const comment = require('../models/commentModel');
const fs = require('fs');

exports.getAllComments = (req, res) => {
    comment.findAll({
        include: ['post','user'],
        where: {id_post: req.params.id}
    })
        .then((comments) => res.status(200).json(comments))
        .catch((err) => res.status(400).json({err}))
};

exports.createComment = (req, res) => {
    const data = req.body.comment;
    comment.create({
        id_user: data.id_user,
        id_post: req.params.id,
        text: data.text,
        imageUrl: data.imageUrl
    })
        .then(() => res.status(200).json({message: 'comment created'}))
        .catch((err) => res.status(400).json({err}))
};

exports.updateComment = (req, res) => {
    const data = req.body.comment;
    comment.findOne({where: {id_comment: req.params.cmt}})
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
            } else throw ('Comment not found');
        })
        .catch((err) => res.status(500).json(err))
};

exports.deleteComment = (req, res) => {
    comment.findOne({where: {id_comment: req.params.cmt}})
        .then((found) => {
            if (found) {
                comment.destroy({where: {id_comment: req.params.cmt}})
                    .then(() => res.status(200).json({message: 'comment deleted'}))
                    .catch((err) => res.status(400).json({err}))
            } else throw ('Comment not found');
        })
        .catch((err) => res.status(500).json(err))
};