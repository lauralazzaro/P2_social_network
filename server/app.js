const express = require('express');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/postsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const connection = require('./database/db.connect');
const relations = require('./models/relations');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

connection.authenticate()
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log('connection to db failed: ' + err));

relations.sync({force: false})
    .then(() => console.log('Tables synchronized'))
    .catch((err) => console.log('Unable to sync: ' + err));

const app = express();

// app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/posts', postsRoutes);
app.use('/auth', usersRoutes);

app.use('/', (req, res) => {
    res.end('Server Created!');
});

module.exports = app;