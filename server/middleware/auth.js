const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
        const id_user = decodedToken.id_user;

        if (req.body.id_user && req.body.id_user !== id_user) {
            throw 'Invalid user ID';
        } else {
            console.log(decodedToken);
            next();
        }
    } catch {
        res.status(401).json({error: new Error()});
    }
};