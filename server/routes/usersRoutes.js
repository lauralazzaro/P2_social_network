const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/usersCtrl');

router.post('', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}. I received your request`,
    });
    console.log(req.body);
});

router.get('/createUser', usersCtrl.createUser);

module.exports = router;