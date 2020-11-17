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
    .catch((err) => console.log('Unable to sync: ' + err));;

const app = express();

app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/posts/comments', commentsRoutes);
app.use('/posts', postsRoutes);
app.use('/auth', usersRoutes);

app.use('/', (req, res) => {
    res.send('Server Created!');
});

module.exports = app;