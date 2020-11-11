const userModel = require('../models/userModel');

exports.createUser = (req, res) => {
    userModel.sync({force: false})
        .then(() => console.log('All models were synchronized successfully.'))
        .catch((err) => console.log('Error: ' + err));
}