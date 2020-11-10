const connection = require('../database/db.connect');
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
    const sql = `SELECT * FROM posts`;
    queryFunction(res, sql);
};

exports.getOnePost = (req, res) => {
    const sql = `SELECT * FROM posts WHERE id_post = ` + req.params.id;
    queryFunction(res, sql);
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

