const connection = require('../database/db.connect');
const db = require('../database/db.connect');
const post = require('../models/postsModel');
const fs = require('fs');

function queryFunction(res, sql) {
    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.status(400).json({error});
        }
        res.status(200).json(results);
    });
}

exports.getAllPosts = (req, res) => {
    post.findAll()
        .then(posts => res.send(posts))
        .catch( (err) => console.log(err));
};

exports.getOnePost = (req, res) => {
    post.findOne({where: {id_post: req.params.id}})
        .then(post => res.send(post))
        .catch( (err) => console.log(err))
};

exports.createPost = (req, res) => {

};

exports.modifyPost = (req, res) => {

};

exports.deletePost = (req, res) => {
    const sql = `DELETE FROM posts WHERE id_post = ` + req.params.id;
    const imageUrl = `
        SELECT images.url 
        FROM images 
        WHERE images.id_image IN 
            (SELECT posts.id_image
            FROM posts
            WHERE id_post =` + req.params.id + `)`;

    queryFunction(res, sql);
};

