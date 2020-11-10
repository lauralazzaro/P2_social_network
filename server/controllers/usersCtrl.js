const userModel = require('../models/userModel');
const dbConnect = require('../database/db.connect');

exports.createUser = (req, res) => {
    userModel.sync()
        .then(() => console.log('All models were synchronized successfully.'))
        .catch((err) => console.log('Error: ' + err));
}