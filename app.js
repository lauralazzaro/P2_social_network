const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(function(err) {
    if(err){
        return console.error('error: ' + err.message);
    }
    console.log('Connected to MySQL server');

    const sql = `SELECT * FROM categories`;
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
    });
});

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('', (req, res, next) => {
    console.log('Server Created!');
});

module.exports = app;