const express = require('express');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/postsRoutes');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const connection = require('./database/db.connect');

connection.connect(function(err) {
    if(err){
        return console.error('error: ' + err.message);
    }
    console.log('Connected to MySQL server');

});

const app = express();

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//     next();
// });
app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/posts', postsRoutes);
app.use('/', (req, res) => {
    res.send('Server Created!');
});

module.exports = app;