const express = require('express');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/postsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const connection = require('./database/db.connect');
const relations = require('./models/relations');
const path = require('path');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

require('dotenv').config();

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

connection.authenticate()
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log('connection to db failed: ' + err));

connection.query('SET FOREIGN_KEY_CHECKS = 0').then(() => {
    relations.sync({force: false})
        .then(() => console.log('Tables synchronized'))
        .catch((err) => console.log('Unable to sync: ' + err));
}).catch((err) => console.log('Error: ' + err));

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', usersRoutes);
app.use('/posts', postsRoutes);

app.use('/', (req, res) => {
    res.end('Server Created!');
});

module.exports = app;