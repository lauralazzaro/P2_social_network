const connection = require('../database/db.connect');

exports.getAllPosts = (req, res) => {
    const sql = `SELECT * FROM posts`;
    connection.query(sql, (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            console.log(results);
            res.send(results);
        });
    };

exports.getOnePost = (req, res) => {
    const sql = `SELECT * FROM posts WHERE id_post = ` + req.params.id;
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });
};

exports.createPost = (req, res) =>{
    
};

