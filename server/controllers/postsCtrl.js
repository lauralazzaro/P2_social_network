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

exports.modifyPost = (req, res) => {

};

exports.deletePost = (req, res) => {

};

