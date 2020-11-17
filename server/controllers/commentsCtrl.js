const comment = require('../models/commentModel');
const fs = require('fs');

exports.getAllComments = (req, res) => {
    comment.findAll({include: ['post','user']})
        .then((comments) => res.status(200).json(comments))
        .catch((err) => res.status(400).json({err}))
};

exports.createComment = (req, res) => {
    const data = req.body.comment;
    comment.create({
        id_user: data.id_user,
        id_post: data.id_post,
        text: data.text,
        imageUrl: data.imageUrl
    })
        .then(() => res.status(200).json({message: 'comment created'}))
        .catch((err) => res.status(400).json({err}))
};

exports.updateComment = (req, res) => {
    const data = req.body.comment;
    comment.findOne({where: {id_comment: req.params.id}})
        .then((found) => {
            if (found) {
                comment.update({
                        id_user: data.id_user,
                        text: data.text,
                        imageUrl: data.imageUrl
                    },
                    {where: {id_comment: req.params.id}})
                    .then(() => res.status(200).json({message: 'comment updated'}))
                    .catch((err) => res.status(400).json({err}))
            } else throw ('Comment not found');
        })
        .catch((err) => res.status(500).json(err))
};

exports.deleteComment = (req, res) => {
    comment.findOne({where: {id_comment: req.params.id}})
        .then((found) => {
            if (found) {
                comment.destroy({where: {id_comment: req.params.id}})
                    .then(() => res.status(200).json({message: 'comment deleted'}))
                    .catch((err) => res.status(400).json({err}))
            } else throw ('Comment not found');
        })
        .catch((err) => res.status(500).json(err))
};