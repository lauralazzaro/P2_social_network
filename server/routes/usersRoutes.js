const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/usersCtrl');
const auth = require('../middleware/auth')

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.delete('/deleteAccount/:id', auth, usersCtrl.deleteAccount);

module.exports = router;