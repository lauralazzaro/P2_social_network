const post = require('../models/postsModel');
const fs = require('fs');

exports.getAllPosts = (req, res) => {
    post.findAll({
        include: 'user',
        order: [
            ['createdAt','DESC']
        ]
    })
        .then((posts) => res.status(200).json(posts))
        .catch((err) => res.status(400).json({err}))
};

exports.getOnePost = (req, res) => {
    post.findOne({
        where: {id_post: req.params.id},
        include: 'user'})
        .then((post) => res.status(200).json(post))
        .catch((err) => res.status(400).json({err}))
};

exports.createPost = (req, res) => {
    const data = req.body;
    post.create({
        id_user: data.id_user,
        text: data.text,
        imageUrl: data.imageUrl,
        id_subject: data.id_subject
    })
        .then(() => res.status(200).json({message: 'post created'}))
        .catch((err) => res.status(400).json({err}))
};

exports.updatePost = (req, res) => {
    const data = req.body.post;
    post.findOne({where: {id_post: req.params.id}})
        .then((found) => {
            if (found) {
                post.update({
                        id_user: data.id_user,
                        text: data.text,
                        imageUrl: data.imageUrl,
                        id_subject: data.id_subject
                    },
                    {where: {id_post: req.params.id}})
                    .then(() => res.status(200).json({message: 'post updated'}))
                    .catch((err) => res.status(400).json({err}))
            } else throw ('Post not found');
        })
        .catch((err) => res.status(500).json(err))
};

exports.deletePost = (req, res) => {
    post.findOne({where: {id_post: req.params.id}})
        .then((found) => {
            if (found) {
                post.destroy({where: {id_post: req.params.id}})
                    .then(() => res.status(200).json({message: 'post deleted'}))
                    .catch((err) => res.status(400).json({err}))
            } else throw ('Post not found');
        })
        .catch((err) => res.status(500).json(err))
};

