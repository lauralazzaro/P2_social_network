const express = require('express');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/postsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const connection = require('./database/db.connect');
const {sequelize} = require('./models/userModel');
const path = require('path');
const cors = require('cors');



require('dotenv').config();

// connection.connect(function(err) {
//     if(err){
//         return console.error('error: ' + err.message);
//     }
//     console.log('Connected to MySQL server');
//
// });

connection.sync()
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log('connection to db failed: ' + err));

const app = express();

app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/posts', postsRoutes);
app.use('/auth', usersRoutes);
app.use('/', (req, res) => {
    res.send('Server Created!');
});

module.exports = app;