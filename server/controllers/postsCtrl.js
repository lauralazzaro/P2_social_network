const post = require('../models/postsModel');
const fs = require('fs');

exports.getAllPosts = (req, res) => {
    post.findAll()
        .then(posts => res.status(200).json(posts))
        .catch((err) => res.status(400).json({err}))
};

exports.getOnePost = (req, res) => {
    console.log(req.params.id);
    post.findOne({where: {id_post: req.params.id}})
        .then(post => res.status(200).json(post))
        .catch((err) => res.status(400).json({err}))
};

exports.createPost = (req, res) => {

};

exports.updatePost = (req, res) => {

};

exports.deletePost = (req, res) => {
    post.findOne({where: {id_post: req.params.id}})
        .then((ok) => {
            if(ok) {
                post.destroy({where: {id_post: req.params.id}})
                    .then(() => res.status(200).json({message: 'posts deleted'}))
                    .catch((err) => res.status(400).json({err}))
            } else throw ('Post not found');
        })
        .catch((err) => res.status(500).json(err))
};

